import { DisneyEntityBase } from '../DisneyEntityBase';
import type { DisneySDK } from '../DisneySDK';
import type { Control } from '../types';
import type { Character, CharacterLoadMatch, CharacterListMatch } from '../DisneyTypes';
declare class CharacterEntity extends DisneyEntityBase<Character> {
    constructor(client: DisneySDK, entopts: any);
    make(this: CharacterEntity): CharacterEntity;
    load(this: any, reqmatch?: CharacterLoadMatch, ctrl?: Control): Promise<CharacterEntity>;
    list(this: any, reqmatch?: CharacterListMatch, ctrl?: Control): Promise<CharacterEntity[]>;
}
export { CharacterEntity };
