import config, { updateConfigCurrencies } from '../const';
import { binaryApi } from '../../../common/appId';

describe('Configured currencies', () => {
    let configuration;

    beforeEach(() => {
        configuration = config;
    });

    it('Retrieves a list of available currencies for payout', () => {
        updateConfigCurrencies(binaryApi.api).then(() => {
            expect(configuration.lists.CURRENCY).toBeDefined();
        });
    });
});
