import Observer from '../../common/utils/observer';
import TicksService from '../common/TicksService';
import { generateLiveApiInstance } from '../../common/appId';

// eslint-disable-next-line import/prefer-default-export
export const createScope = () => {
    const observer = new Observer();
    const api = generateLiveApiInstance();

    const ticksService = new TicksService(api);

    return { observer, api, ticksService };
};
