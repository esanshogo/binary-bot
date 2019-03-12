import Observer from '../../common/utils/observer';
import TicksService from '../common/TicksService';
import { binaryApi } from '../../common/appId';

// eslint-disable-next-line import/prefer-default-export
export const createScope = () => {
    const observer = new Observer();
    const api = binaryApi.api;

    const ticksService = new TicksService(binaryApi.api);

    return { observer, api, ticksService };
};
