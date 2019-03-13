import { observer } from './utils/observer';
import { loadWorkspace } from '../botPage/view/blockly';

export default class GAuth {
    constructor() {
        this.GoogleAuth = null;
        this.isAuthorized = false;

        this.botFolderName = 'Binary.com - Binary Bot Strategies';
        this.appId = 'bottest-232606';
        this.apiKey = 'AIzaSyCr1kYjUEIUJvyyNN0MlMZQ8t4qV7qkknU';
        this.clientId = '900102981549-3omc86ccmd88lcssmvai9euhc6832i58.apps.googleusercontent.com';
    }

    init() {
        gapi.load('client:auth2:picker', () => {
            gapi.client
                .init({
                    apiKey       : this.apiKey,
                    clientId     : this.clientId,
                    scope        : 'https://www.googleapis.com/auth/drive.file',
                    discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/drive/v3/rest'],
                })
                .then(() => {
                    this.GoogleAuth = gapi.auth2.getAuthInstance();
                    this.GoogleAuth.isSignedIn.listen(this.updateSigninStatus);
                    this.updateSigninStatus(this.GoogleAuth.isSignedIn.get());
                });
        });
    }

    createPicker() {
        this.authoriseFirst().then(() => {
            this.getBotFolderId().then(botFolderId => {
                const view = new google.picker.View(google.picker.ViewId.DOCS);
                view.setMimeTypes('application/xml');
                view.setParent(botFolderId);

                const picker = new google.picker.PickerBuilder()
                    .enableFeature(google.picker.Feature.NAV_HIDDEN)
                    .setAppId(this.appId)
                    .setOAuthToken(gapi.auth.getToken().access_token)
                    .addView(view)
                    .setDeveloperKey(this.apiKey)
                    .setCallback(this.userPickedFile)
                    .build();
                picker.setVisible(true);
            });
        });
    }

    userPickedFile(data) {
        if (data.action !== google.picker.Action.PICKED) return;

        const fileId = data.docs[0].id;
        gapi.client.drive.files
            .get({
                alt     : 'media',
                fileId,
                mimeType: 'text/plain',
            })
            .then(response => {
                try {
                    loadWorkspace(response.body);
                } catch (e) {
                    observer.emit('ui.log.warn', 'Could not load Google Drive blocks');
                }
            })
            .catch(e => {
                console.log(e);
            });
    }

    updateSigninStatus(isSignedIn) {
        if (isSignedIn) {
            this.isAuthorized = true;
        }
    }

    disconnect() {
        if (this.isAuthorized) {
            this.isAuthorized = false;
            return this.GoogleAuth.disconnect();
        }
        return Promise.resolve();
    }

    authoriseFirst() {
        return new Promise((resolve, reject) => {
            if (this.isAuthorized) {
                resolve();
            } else {
                this.GoogleAuth.signIn()
                    .then(() => {
                        this.updateSigninStatus(true);
                        resolve();
                    })
                    .catch(e => reject(e));
            }
        });
    }

    getBotFolderId() {
        return new Promise((resolve, reject) => {
            gapi.client.drive.files
                .list({ q: 'trashed = false' })
                .then(response => {
                    // Check if the folder exists
                    const botFolder = response.result.files.find(
                        file =>
                            file.name === this.botFolderName && file.mimeType === 'application/vnd.google-apps.folder'
                    );
                    if (botFolder) {
                        observer.emit('ui.log.success', 'Found existing Bot Folder, resolving...');
                        return resolve(botFolder.id);
                    }
                    // Create the folder if it doesn't
                    gapi.client.drive.files
                        .create({
                            resource: {
                                name    : this.botFolderName,
                                mimeType: 'application/vnd.google-apps.folder',
                                fields  : 'id',
                            },
                        })
                        .then(response => resolve(response.result.id))
                        .catch(error => reject(error));
                })
                .catch(e => reject(e));
        });
    }

    saveFileToGoogleDrive(options) {
        return new Promise((resolve, reject) => {
            this.authoriseFirst()
                .then(() => {
                    this.getBotFolderId()
                        .then(botFolderId => {
                            const strategyFile = new Blob([options.content], { type: options.mimeType });
                            const strategyFileMetadata = JSON.stringify({
                                name    : options.name,
                                mimeType: options.mimeType,
                                parents : [botFolderId],
                            });

                            const formData = new FormData();
                            formData.append('metadata', new Blob([strategyFileMetadata], { type: 'application/json' }));
                            formData.append('file', strategyFile);

                            const xhr = new XMLHttpRequest();
                            xhr.open('POST', 'https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart');
                            xhr.setRequestHeader('Authorization', `Bearer ${gapi.auth.getToken().access_token}`);
                            xhr.responseType = 'json';
                            xhr.onload = () => {
                                if (xhr.status === 200) {
                                    resolve(xhr.response);
                                } else {
                                    reject(xhr.status);
                                }
                            };
                            xhr.send(formData);
                        })
                        .catch(e => reject(e));
                })
                .catch(e => reject(e));
        });
    }
}
