"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = __importDefault(require("node:path"));
const Fs = __importStar(require("node:fs"));
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const live_runner_1 = require("../../live-runner");
const live_entity_1 = require("../../live-entity");
const __1 = require("../../..");
const utility_1 = require("../../utility");
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('CharacterEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when DISNEY_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('DISNEY_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.DisneySDK.test();
        const ent = testsdk.Character();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.DISNEY_TEST_LIVE;
        for (const op of ['list', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'character.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "alignment": { "a": true, "h": "Alignment", "n": "alignment", "r": false, "sh": "Character alignment (good, bad, neutral, etc.)", "t": "`$STRING`", "key$": "alignment", "index$": 0 }, "allies": { "a": true, "h": "Allies", "n": "allies", "r": false, "sh": "List of character allies", "t": "`$ARRAY`", "key$": "allies", "index$": 1 }, "createdAt": { "a": true, "fo": "date-time", "h": "Created At", "n": "createdAt", "r": false, "sh": "Timestamp when the character was added to the database", "t": "`$STRING`", "key$": "createdAt", "index$": 2 }, "data": { "a": true, "h": "Data", "n": "data", "r": false, "t": "`$OBJECT`", "key$": "data", "index$": 3 }, "enemies": { "a": true, "h": "Enemies", "n": "enemies", "r": false, "sh": "List of character enemies", "t": "`$ARRAY`", "key$": "enemies", "index$": 4 }, "films": { "a": true, "h": "Films", "n": "films", "r": false, "sh": "List of films the character appears in", "t": "`$ARRAY`", "key$": "films", "index$": 5 }, "id": { "a": true, "h": "Id", "n": "id", "r": false, "sh": "Unique identifier for the character", "t": "`$INTEGER`", "key$": "id", "index$": 6 }, "imageUrl": { "a": true, "fo": "uri", "h": "Image Url", "n": "imageUrl", "r": false, "sh": "Image URL for the character", "t": "`$STRING`", "key$": "imageUrl", "index$": 7 }, "info": { "a": true, "h": "Info", "n": "info", "r": false, "t": "`$OBJECT`", "key$": "info", "index$": 8 }, "name": { "a": true, "h": "Name", "n": "name", "r": false, "sh": "Name of the character", "t": "`$STRING`", "key$": "name", "index$": 9 }, "parkAttractions": { "a": true, "h": "Park Attractions", "n": "parkAttractions", "r": false, "sh": "List of park attractions featuring the character", "t": "`$ARRAY`", "key$": "parkAttractions", "index$": 10 }, "shortFilms": { "a": true, "h": "Short Films", "n": "shortFilms", "r": false, "sh": "List of short films the character appears in", "t": "`$ARRAY`", "key$": "shortFilms", "index$": 11 }, "sourceUrl": { "a": true, "fo": "uri", "h": "Source Url", "n": "sourceUrl", "r": false, "sh": "Source URL (Disney Wiki) for the character", "t": "`$STRING`", "key$": "sourceUrl", "index$": 12 }, "tvShows": { "a": true, "h": "Tv Shows", "n": "tvShows", "r": false, "sh": "List of TV shows the character appears in", "t": "`$ARRAY`", "key$": "tvShows", "index$": 13 }, "updatedAt": { "a": true, "fo": "date-time", "h": "Updated At", "n": "updatedAt", "r": false, "sh": "Timestamp when the character was last updated", "t": "`$STRING`", "key$": "updatedAt", "index$": 14 }, "url": { "a": true, "fo": "uri", "h": "Url", "n": "url", "r": false, "sh": "API URL for this character", "t": "`$STRING`", "key$": "url", "index$": 15 }, "v": { "a": true, "h": "V", "n": "v", "r": false, "sh": "Version key", "t": "`$INTEGER`", "key$": "v", "index$": 16 }, "videoGames": { "a": true, "h": "Video Games", "n": "videoGames", "r": false, "sh": "List of video games the character appears in", "t": "`$ARRAY`", "key$": "videoGames", "index$": 17 } }, "id": { "field": "id", "name": "id" }, "name": "character", "op": { "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /character", "source": "openapi3", "version": 2 }, "g": { "query": [{ "a": true, "k": "query", "n": "alignment", "or": "alignment", "r": false, "t": "`$STRING`", "index$": 0 }, { "a": true, "k": "query", "n": "ally", "or": "ally", "r": false, "t": "`$STRING`", "index$": 1 }, { "a": true, "k": "query", "n": "enemy", "or": "enemy", "r": false, "t": "`$STRING`", "index$": 2 }, { "a": true, "k": "query", "n": "film", "or": "film", "r": false, "t": "`$STRING`", "index$": 3 }, { "a": true, "k": "query", "n": "name", "or": "name", "r": false, "t": "`$STRING`", "index$": 4 }, { "a": true, "ex": 1, "k": "query", "n": "page", "or": "page", "r": false, "t": "`$INTEGER`", "index$": 5 }, { "a": true, "ex": 50, "k": "query", "n": "page_size", "or": "page_size", "r": false, "t": "`$INTEGER`", "index$": 6 }, { "a": true, "k": "query", "n": "park_attraction", "or": "park_attraction", "r": false, "t": "`$STRING`", "index$": 7 }, { "a": true, "k": "query", "n": "short_film", "or": "short_film", "r": false, "t": "`$STRING`", "index$": 8 }, { "a": true, "k": "query", "n": "tv_show", "or": "tv_show", "r": false, "t": "`$STRING`", "index$": 9 }, { "a": true, "k": "query", "n": "video_game", "or": "video_game", "r": false, "t": "`$STRING`", "index$": 10 }] }, "k": "http", "m": "GET", "o": "/character", "q": { "exist": ["alignment", "ally", "enemy", "film", "name", "page", "page_size", "park_attraction", "short_film", "tv_show", "video_game"] }, "r": {}, "s": [{ "lit": "character" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "list" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /character/{id}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "id", "r": true, "t": "`$INTEGER`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/character/{id}", "q": { "exist": ["id"] }, "r": {}, "s": [{ "lit": "character" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" } }, "relations": { "ancestors": [] }, "key$": "character", "name__orig": "character", "Name": "Character", "name_": "character", "name-": "character", "NAME": "CHARACTER", "index$": 0 }, { "active": true, "entity": "character", "key$": "BasicCharacterFlow", "kind": "basic", "name": "BasicCharacterFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": {}, "m": {}, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "character_ref01" } }], "index$": 0 }, { "a": true, "d": {}, "i": { "ref": "character_ref01", "srcdatavar": "character_ref01_data", "suffix": "_dt0" }, "m": { "id": "character01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-character_ref01" } }], "index$": 1 }] }, 'Character', { "GET /character": { "protocol": "http", "operationId": "getAllCharacters", "responses": { "200": { "description": "Successful response with character list", "content": { "application/json": { "schema": { "type": "object", "properties": { "info": { "key$": "info", "properties": { "count": { "description": "Number of items in current response", "type": "integer" }, "nextPage": { "description": "URL for the next page", "format": "uri", "nullable": true, "type": "string" }, "previousPage": { "description": "URL for the previous page", "format": "uri", "nullable": true, "type": "string" }, "totalPages": { "description": "Total number of pages available", "type": "integer" } }, "type": "object", "x-ref": "#/components/schemas/PaginationInfo" }, "data": { "items": { "properties": { "__v": { "description": "Version key", "type": "integer", "key$": "__v" }, "_id": { "description": "Unique identifier for the character", "type": "integer", "key$": "_id" }, "alignment": { "description": "Character alignment (good, bad, neutral, etc.)", "type": "string", "key$": "alignment" }, "allies": { "description": "List of character allies", "items": { "type": "string" }, "type": "array", "key$": "allies" }, "createdAt": { "description": "Timestamp when the character was added to the database", "format": "date-time", "type": "string", "key$": "createdAt" }, "enemies": { "description": "List of character enemies", "items": { "type": "string" }, "type": "array", "key$": "enemies" }, "films": { "description": "List of films the character appears in", "items": { "type": "string" }, "type": "array", "key$": "films" }, "imageUrl": { "description": "Image URL for the character", "format": "uri", "type": "string", "key$": "imageUrl" }, "name": { "description": "Name of the character", "type": "string", "key$": "name" }, "parkAttractions": { "description": "List of park attractions featuring the character", "items": { "type": "string" }, "type": "array", "key$": "parkAttractions" }, "shortFilms": { "description": "List of short films the character appears in", "items": { "type": "string" }, "type": "array", "key$": "shortFilms" }, "sourceUrl": { "description": "Source URL (Disney Wiki) for the character", "format": "uri", "type": "string", "key$": "sourceUrl" }, "tvShows": { "description": "List of TV shows the character appears in", "items": { "type": "string" }, "type": "array", "key$": "tvShows" }, "updatedAt": { "description": "Timestamp when the character was last updated", "format": "date-time", "type": "string", "key$": "updatedAt" }, "url": { "description": "API URL for this character", "format": "uri", "type": "string", "key$": "url" }, "videoGames": { "description": "List of video games the character appears in", "items": { "type": "string" }, "type": "array", "key$": "videoGames" } }, "type": "object", "x-ref": "#/components/schemas/Character", "index$": 0 }, "key$": "data", "type": "array" } }, "x-ref": "#/components/schemas/CharacterListResponse" }, "example": { "info": { "totalPages": 149, "count": 50, "previousPage": "https://api.disneyapi.dev/character?page=3", "nextPage": "https://api.disneyapi.dev/character?page=5" }, "data": [{ "_id": 308, "films": ["Tangled", "Tangled: Before Ever After"], "shortFilms": ["Tangled Ever After", "Hare Peace"], "tvShows": ["Once Upon a Time", "Tangled: The Series"], "videoGames": ["Disney Princess Enchanting Storybooks", "Hidden Worlds", "Disney Crossy Road", "Kingdom Hearts III"], "parkAttractions": ["Celebrate the Magic", "Jingle Bell, Jingle BAM!"], "allies": [], "enemies": [], "sourceUrl": "https://disney.fandom.com/wiki/Queen_Arianna", "name": "Queen Arianna", "imageUrl": "https://static.wikia.nocookie.net/disney/images/1/15/Arianna_Tangled.jpg/revision/latest?cb=20160715191802", "createdAt": "2021-04-12T01:33:34.458Z", "updatedAt": "2021-04-12T01:33:34.458Z", "url": "https://api.disneyapi.dev/characters/308", "__v": 0 }] } } } }, "400": { "description": "Bad request - invalid parameters" }, "500": { "description": "Internal server error" } }, "parameters": [{ "name": "page", "in": "query", "description": "The page number to get", "required": false, "schema": { "type": "integer", "default": 1, "minimum": 1 }, "index$": 0 }, { "name": "pageSize", "in": "query", "description": "The number of items per page", "required": false, "schema": { "type": "integer", "default": 50, "minimum": 1, "maximum": 100 }, "index$": 1 }, { "name": "name", "in": "query", "description": "Filter by character name", "required": false, "schema": { "type": "string" }, "index$": 2 }, { "name": "films", "in": "query", "description": "Filter by films the character appears in", "required": false, "schema": { "type": "string" }, "index$": 3 }, { "name": "shortFilms", "in": "query", "description": "Filter by short films the character appears in", "required": false, "schema": { "type": "string" }, "index$": 4 }, { "name": "tvShows", "in": "query", "description": "Filter by TV shows the character appears in", "required": false, "schema": { "type": "string" }, "index$": 5 }, { "name": "videoGames", "in": "query", "description": "Filter by video games the character appears in", "required": false, "schema": { "type": "string" }, "index$": 6 }, { "name": "parkAttractions", "in": "query", "description": "Filter by park attractions featuring the character", "required": false, "schema": { "type": "string" }, "index$": 7 }, { "name": "allies", "in": "query", "description": "Filter by character allies", "required": false, "schema": { "type": "string" }, "index$": 8 }, { "name": "enemies", "in": "query", "description": "Filter by character enemies", "required": false, "schema": { "type": "string" }, "index$": 9 }, { "name": "alignment", "in": "query", "description": "Filter by character alignment", "required": false, "schema": { "type": "string" }, "index$": 10 }], "securitySource": "unspecified" }, "GET /character/{id}": { "protocol": "http", "operationId": "getOneCharacter", "responses": { "200": { "description": "Successful response with character details", "content": { "application/json": { "schema": { "type": "object", "properties": { "info": { "type": "object", "properties": { "count": { "type": "integer", "description": "Number of items in response (always 1 for single character)" } }, "key$": "info" }, "data": { "type": "object", "properties": { "_id": { "description": "Unique identifier for the character", "type": "integer" }, "url": { "description": "API URL for this character", "format": "uri", "type": "string" }, "name": { "description": "Name of the character", "type": "string" }, "sourceUrl": { "description": "Source URL (Disney Wiki) for the character", "format": "uri", "type": "string" }, "imageUrl": { "description": "Image URL for the character", "format": "uri", "type": "string" }, "films": { "description": "List of films the character appears in", "items": { "type": "string" }, "type": "array" }, "shortFilms": { "description": "List of short films the character appears in", "items": { "type": "string" }, "type": "array" }, "tvShows": { "description": "List of TV shows the character appears in", "items": { "type": "string" }, "type": "array" }, "videoGames": { "description": "List of video games the character appears in", "items": { "type": "string" }, "type": "array" }, "alignment": { "description": "Character alignment (good, bad, neutral, etc.)", "type": "string" }, "parkAttractions": { "description": "List of park attractions featuring the character", "items": { "type": "string" }, "type": "array" }, "allies": { "description": "List of character allies", "items": { "type": "string" }, "type": "array" }, "enemies": { "description": "List of character enemies", "items": { "type": "string" }, "type": "array" }, "createdAt": { "description": "Timestamp when the character was added to the database", "format": "date-time", "type": "string" }, "updatedAt": { "description": "Timestamp when the character was last updated", "format": "date-time", "type": "string" }, "__v": { "description": "Version key", "type": "integer" } }, "x-ref": "#/components/schemas/Character", "key$": "data" } }, "x-ref": "#/components/schemas/CharacterResponse", "index$": 0 }, "example": { "info": { "count": 1 }, "data": { "_id": 308, "films": ["Tangled", "Tangled: Before Ever After"], "shortFilms": ["Tangled Ever After", "Hare Peace"], "tvShows": ["Once Upon a Time", "Tangled: The Series"], "videoGames": ["Disney Princess Enchanting Storybooks", "Hidden Worlds", "Disney Crossy Road", "Kingdom Hearts III"], "parkAttractions": ["Celebrate the Magic", "Jingle Bell, Jingle BAM!"], "allies": [], "enemies": [], "name": "Queen Arianna", "imageUrl": "https://static.wikia.nocookie.net/disney/images/1/15/Arianna_Tangled.jpg", "url": "https://api.disneyapi.dev/characters/308" } } } } }, "404": { "description": "Character not found" }, "500": { "description": "Internal server error" } }, "parameters": [{ "name": "id", "in": "path", "description": "The ID of the character to retrieve", "required": true, "schema": { "type": "integer" }, "index$": 0 }], "securitySource": "unspecified" } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let character_ref01_data = Object.values(setup.data.existing.character)[0];
        // LIST
        const character_ref01_ent = client.Character();
        const character_ref01_match = {};
        const character_ref01_list = (await character_ref01_ent.list(character_ref01_match)).map((e) => e.data());
        // LOAD
        const character_ref01_match_dt0 = {};
        character_ref01_match_dt0.id = character_ref01_data.id;
        const character_ref01_data_dt0 = (await character_ref01_ent.load(character_ref01_match_dt0)).data();
        (0, node_assert_1.default)(character_ref01_data_dt0.id === character_ref01_data.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/character/CharacterTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.DisneySDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['character01', 'character02', 'character03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'DISNEY_TEST_CHARACTER_ENTID': idmap,
        'DISNEY_TEST_LIVE': 'FALSE',
        'DISNEY_TEST_EXPLAIN': 'FALSE',
    });
    idmap = env['DISNEY_TEST_CHARACTER_ENTID'];
    const live = 'TRUE' === env.DISNEY_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['DISNEY_TEST_CHARACTER_ENTID'];
        idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {};
        if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
            throw new Error('Live ENTID must be a JSON object');
        }
        client = new __1.DisneySDK(merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            (0, utility_1.liveClientOptions)(),
            {},
            // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
            // last entry is undefined, and basicSetup is normally called with no
            // argument at all - so a bare 'extra' silently discarded the apikey
            // and server values above and handed the SDK undefined. Harmless
            // while there was nothing in that object; not harmless now.
            extra || {},
            { system: { fetch: transport.fetch } }
        ]));
    }
    const setup = {
        idmap,
        env,
        options,
        client,
        struct,
        data: entityData,
        explain: 'TRUE' === env.DISNEY_TEST_EXPLAIN,
        live,
        transport,
        now: Date.now(),
    };
    return setup;
}
//# sourceMappingURL=CharacterEntity.test.js.map