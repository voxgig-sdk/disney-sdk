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
// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
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
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "name": "alignment", "req": false, "short": "Character alignment (good, bad, neutral, etc.)", "type": "`$STRING`", "index$": 0 }, { "active": true, "name": "allies", "req": false, "short": "List of character allies", "type": "`$ARRAY`", "index$": 1 }, { "active": true, "format": "date-time", "name": "createdAt", "req": false, "short": "Timestamp when the character was added to the database", "type": "`$STRING`", "index$": 2 }, { "active": true, "name": "data", "req": false, "type": "`$OBJECT`", "index$": 3 }, { "active": true, "name": "enemies", "req": false, "short": "List of character enemies", "type": "`$ARRAY`", "index$": 4 }, { "active": true, "name": "films", "req": false, "short": "List of films the character appears in", "type": "`$ARRAY`", "index$": 5 }, { "active": true, "name": "id", "req": false, "short": "Unique identifier for the character", "type": "`$INTEGER`", "index$": 6 }, { "active": true, "format": "uri", "name": "imageUrl", "req": false, "short": "Image URL for the character", "type": "`$STRING`", "index$": 7 }, { "active": true, "name": "info", "req": false, "type": "`$OBJECT`", "index$": 8 }, { "active": true, "name": "name", "req": false, "short": "Name of the character", "type": "`$STRING`", "index$": 9 }, { "active": true, "name": "parkAttractions", "req": false, "short": "List of park attractions featuring the character", "type": "`$ARRAY`", "index$": 10 }, { "active": true, "name": "shortFilms", "req": false, "short": "List of short films the character appears in", "type": "`$ARRAY`", "index$": 11 }, { "active": true, "format": "uri", "name": "sourceUrl", "req": false, "short": "Source URL (Disney Wiki) for the character", "type": "`$STRING`", "index$": 12 }, { "active": true, "name": "tvShows", "req": false, "short": "List of TV shows the character appears in", "type": "`$ARRAY`", "index$": 13 }, { "active": true, "format": "date-time", "name": "updatedAt", "req": false, "short": "Timestamp when the character was last updated", "type": "`$STRING`", "index$": 14 }, { "active": true, "format": "uri", "name": "url", "req": false, "short": "API URL for this character", "type": "`$STRING`", "index$": 15 }, { "active": true, "name": "v", "req": false, "short": "Version key", "type": "`$INTEGER`", "index$": 16 }, { "active": true, "name": "videoGames", "req": false, "short": "List of video games the character appears in", "type": "`$ARRAY`", "index$": 17 }], "id": { "field": "id", "name": "id" }, "name": "character", "op": { "list": { "input": "data", "name": "list", "points": [{ "active": true, "args": { "query": [{ "active": true, "kind": "query", "name": "alignment", "orig": "alignment", "reqd": false, "type": "`$STRING`", "index$": 0 }, { "active": true, "kind": "query", "name": "ally", "orig": "ally", "reqd": false, "type": "`$STRING`", "index$": 1 }, { "active": true, "kind": "query", "name": "enemy", "orig": "enemy", "reqd": false, "type": "`$STRING`", "index$": 2 }, { "active": true, "kind": "query", "name": "film", "orig": "film", "reqd": false, "type": "`$STRING`", "index$": 3 }, { "active": true, "kind": "query", "name": "name", "orig": "name", "reqd": false, "type": "`$STRING`", "index$": 4 }, { "active": true, "example": 1, "kind": "query", "name": "page", "orig": "page", "reqd": false, "type": "`$INTEGER`", "index$": 5 }, { "active": true, "example": 50, "kind": "query", "name": "page_size", "orig": "page_size", "reqd": false, "type": "`$INTEGER`", "index$": 6 }, { "active": true, "kind": "query", "name": "park_attraction", "orig": "park_attraction", "reqd": false, "type": "`$STRING`", "index$": 7 }, { "active": true, "kind": "query", "name": "short_film", "orig": "short_film", "reqd": false, "type": "`$STRING`", "index$": 8 }, { "active": true, "kind": "query", "name": "tv_show", "orig": "tv_show", "reqd": false, "type": "`$STRING`", "index$": 9 }, { "active": true, "kind": "query", "name": "video_game", "orig": "video_game", "reqd": false, "type": "`$STRING`", "index$": 10 }] }, "contract": { "id": "GET /character", "json": "{\"operationId\":\"getAllCharacters\",\"parameters\":[{\"description\":\"The page number to get\",\"in\":\"query\",\"name\":\"page\",\"required\":false,\"schema\":{\"default\":1,\"minimum\":1,\"type\":\"integer\"}},{\"description\":\"The number of items per page\",\"in\":\"query\",\"name\":\"pageSize\",\"required\":false,\"schema\":{\"default\":50,\"maximum\":100,\"minimum\":1,\"type\":\"integer\"}},{\"description\":\"Filter by character name\",\"in\":\"query\",\"name\":\"name\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"Filter by films the character appears in\",\"in\":\"query\",\"name\":\"films\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"Filter by short films the character appears in\",\"in\":\"query\",\"name\":\"shortFilms\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"Filter by TV shows the character appears in\",\"in\":\"query\",\"name\":\"tvShows\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"Filter by video games the character appears in\",\"in\":\"query\",\"name\":\"videoGames\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"Filter by park attractions featuring the character\",\"in\":\"query\",\"name\":\"parkAttractions\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"Filter by character allies\",\"in\":\"query\",\"name\":\"allies\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"Filter by character enemies\",\"in\":\"query\",\"name\":\"enemies\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"Filter by character alignment\",\"in\":\"query\",\"name\":\"alignment\",\"required\":false,\"schema\":{\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"example\":{\"data\":[{\"__v\":0,\"_id\":308,\"allies\":[],\"createdAt\":\"2021-04-12T01:33:34.458Z\",\"enemies\":[],\"films\":[\"Tangled\",\"Tangled: Before Ever After\"],\"imageUrl\":\"https://static.wikia.nocookie.net/disney/images/1/15/Arianna_Tangled.jpg/revision/latest?cb=20160715191802\",\"name\":\"Queen Arianna\",\"parkAttractions\":[\"Celebrate the Magic\",\"Jingle Bell, Jingle BAM!\"],\"shortFilms\":[\"Tangled Ever After\",\"Hare Peace\"],\"sourceUrl\":\"https://disney.fandom.com/wiki/Queen_Arianna\",\"tvShows\":[\"Once Upon a Time\",\"Tangled: The Series\"],\"updatedAt\":\"2021-04-12T01:33:34.458Z\",\"url\":\"https://api.disneyapi.dev/characters/308\",\"videoGames\":[\"Disney Princess Enchanting Storybooks\",\"Hidden Worlds\",\"Disney Crossy Road\",\"Kingdom Hearts III\"]}],\"info\":{\"count\":50,\"nextPage\":\"https://api.disneyapi.dev/character?page=5\",\"previousPage\":\"https://api.disneyapi.dev/character?page=3\",\"totalPages\":149}},\"schema\":{\"properties\":{\"data\":{\"items\":{\"properties\":{\"__v\":{\"description\":\"Version key\",\"type\":\"integer\"},\"_id\":{\"description\":\"Unique identifier for the character\",\"type\":\"integer\"},\"alignment\":{\"description\":\"Character alignment (good, bad, neutral, etc.)\",\"type\":\"string\"},\"allies\":{\"description\":\"List of character allies\",\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"createdAt\":{\"description\":\"Timestamp when the character was added to the database\",\"format\":\"date-time\",\"type\":\"string\"},\"enemies\":{\"description\":\"List of character enemies\",\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"films\":{\"description\":\"List of films the character appears in\",\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"imageUrl\":{\"description\":\"Image URL for the character\",\"format\":\"uri\",\"type\":\"string\"},\"name\":{\"description\":\"Name of the character\",\"type\":\"string\"},\"parkAttractions\":{\"description\":\"List of park attractions featuring the character\",\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"shortFilms\":{\"description\":\"List of short films the character appears in\",\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"sourceUrl\":{\"description\":\"Source URL (Disney Wiki) for the character\",\"format\":\"uri\",\"type\":\"string\"},\"tvShows\":{\"description\":\"List of TV shows the character appears in\",\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"updatedAt\":{\"description\":\"Timestamp when the character was last updated\",\"format\":\"date-time\",\"type\":\"string\"},\"url\":{\"description\":\"API URL for this character\",\"format\":\"uri\",\"type\":\"string\"},\"videoGames\":{\"description\":\"List of video games the character appears in\",\"items\":{\"type\":\"string\"},\"type\":\"array\"}},\"type\":\"object\"},\"type\":\"array\"},\"info\":{\"properties\":{\"count\":{\"description\":\"Number of items in current response\",\"type\":\"integer\"},\"nextPage\":{\"description\":\"URL for the next page\",\"format\":\"uri\",\"nullable\":true,\"type\":\"string\"},\"previousPage\":{\"description\":\"URL for the previous page\",\"format\":\"uri\",\"nullable\":true,\"type\":\"string\"},\"totalPages\":{\"description\":\"Total number of pages available\",\"type\":\"integer\"}},\"type\":\"object\"}},\"type\":\"object\"}}},\"description\":\"Successful response with character list\"},\"400\":{\"description\":\"Bad request - invalid parameters\"},\"500\":{\"description\":\"Internal server error\"}},\"securitySource\":\"unspecified\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/character", "segments": [{ "lit": "character" }], "select": { "exist": ["alignment", "ally", "enemy", "film", "name", "page", "page_size", "park_attraction", "short_film", "tv_show", "video_game"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "list" }, "load": { "input": "data", "name": "load", "points": [{ "active": true, "args": { "params": [{ "active": true, "kind": "param", "name": "id", "orig": "id", "reqd": true, "type": "`$INTEGER`", "index$": 0 }] }, "contract": { "id": "GET /character/{id}", "json": "{\"operationId\":\"getOneCharacter\",\"parameters\":[{\"description\":\"The ID of the character to retrieve\",\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"type\":\"integer\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"example\":{\"data\":{\"_id\":308,\"allies\":[],\"enemies\":[],\"films\":[\"Tangled\",\"Tangled: Before Ever After\"],\"imageUrl\":\"https://static.wikia.nocookie.net/disney/images/1/15/Arianna_Tangled.jpg\",\"name\":\"Queen Arianna\",\"parkAttractions\":[\"Celebrate the Magic\",\"Jingle Bell, Jingle BAM!\"],\"shortFilms\":[\"Tangled Ever After\",\"Hare Peace\"],\"tvShows\":[\"Once Upon a Time\",\"Tangled: The Series\"],\"url\":\"https://api.disneyapi.dev/characters/308\",\"videoGames\":[\"Disney Princess Enchanting Storybooks\",\"Hidden Worlds\",\"Disney Crossy Road\",\"Kingdom Hearts III\"]},\"info\":{\"count\":1}},\"schema\":{\"properties\":{\"data\":{\"properties\":{\"__v\":{\"description\":\"Version key\",\"type\":\"integer\"},\"_id\":{\"description\":\"Unique identifier for the character\",\"type\":\"integer\"},\"alignment\":{\"description\":\"Character alignment (good, bad, neutral, etc.)\",\"type\":\"string\"},\"allies\":{\"description\":\"List of character allies\",\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"createdAt\":{\"description\":\"Timestamp when the character was added to the database\",\"format\":\"date-time\",\"type\":\"string\"},\"enemies\":{\"description\":\"List of character enemies\",\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"films\":{\"description\":\"List of films the character appears in\",\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"imageUrl\":{\"description\":\"Image URL for the character\",\"format\":\"uri\",\"type\":\"string\"},\"name\":{\"description\":\"Name of the character\",\"type\":\"string\"},\"parkAttractions\":{\"description\":\"List of park attractions featuring the character\",\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"shortFilms\":{\"description\":\"List of short films the character appears in\",\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"sourceUrl\":{\"description\":\"Source URL (Disney Wiki) for the character\",\"format\":\"uri\",\"type\":\"string\"},\"tvShows\":{\"description\":\"List of TV shows the character appears in\",\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"updatedAt\":{\"description\":\"Timestamp when the character was last updated\",\"format\":\"date-time\",\"type\":\"string\"},\"url\":{\"description\":\"API URL for this character\",\"format\":\"uri\",\"type\":\"string\"},\"videoGames\":{\"description\":\"List of video games the character appears in\",\"items\":{\"type\":\"string\"},\"type\":\"array\"}},\"type\":\"object\"},\"info\":{\"properties\":{\"count\":{\"description\":\"Number of items in response (always 1 for single character)\",\"type\":\"integer\"}},\"type\":\"object\"}},\"type\":\"object\"}}},\"description\":\"Successful response with character details\"},\"404\":{\"description\":\"Character not found\"},\"500\":{\"description\":\"Internal server error\"}},\"securitySource\":\"unspecified\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/character/{id}", "segments": [{ "lit": "character" }, { "var": "id" }], "select": { "exist": ["id"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" } }, "relations": { "ancestors": [] }, "key$": "character", "name__orig": "character", "Name": "Character", "name_": "character", "name-": "character", "NAME": "CHARACTER", "index$": 0 }, { "active": true, "entity": "character", "key$": "BasicCharacterFlow", "kind": "basic", "name": "BasicCharacterFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": {}, "match": {}, "op": "list", "spec": [], "valid": [{ "apply": "ItemExists", "def": { "ref": "character_ref01" } }], "index$": 0 }, { "active": true, "data": {}, "input": { "ref": "character_ref01", "srcdatavar": "character_ref01_data", "suffix": "_dt0" }, "match": { "id": "character01" }, "op": "load", "spec": [], "valid": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-character_ref01" } }], "index$": 1 }] }, 'Character');
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