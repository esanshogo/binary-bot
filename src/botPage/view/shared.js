import filesaver from 'file-saver';
import Observer from '../../common/utils/observer';
import { binaryApi } from '../../common/appId';
import _Symbol from '../common/symbolApi';
import TicksService from '../common/TicksService';

export const symbolApi = new _Symbol(binaryApi.api);

export const symbolPromise = new Promise(resolve => {
    symbolApi.initPromise.then(() => {
        resolve();
    });
});

export const ticksService = new TicksService(binaryApi.api);

export const createScope = () => {
    const api = binaryApi.api; // eslint-disable-line prefer-destructuring
    const observer = new Observer();

    return { observer, api, ticksService, symbolApi };
};

export const appendRow = (trade, state) => ({
    id  : state.id + 1,
    rows: [
        ...state.rows,
        {
            ...trade,
            id: state.id + 1,
        },
    ],
});

export const updateRow = (prevRowIndex, trade, state) => ({
    id  : state.id,
    rows: [
        ...state.rows.slice(0, prevRowIndex),
        {
            ...trade,
            id: state.id,
        },
    ],
});

export const saveAs = ({ data, filename, type }) => {
    const blob = new Blob([data], { type });
    filesaver.saveAs(blob, filename);
};

export const restrictInputCharacter = ({ whitelistRegEx, input }) => input.match(new RegExp(whitelistRegEx));
