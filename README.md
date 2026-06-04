# Disney SDK

Look up Disney characters across films, shows, parks, and games via REST or GraphQL

> TypeScript, Python, PHP, Golang, Ruby, Lua SDKs, a CLI, an interactive REPL, and an MCP server for AI agents — all generated from one OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).

## About Disney API

The [Disney API](https://disneyapi.dev) is a community-run, read-only catalogue of roughly 9,820 Disney characters drawn from Disney films, TV shows, video games, and theme-park attractions. It is served from `https://api.disneyapi.dev` and is offered free of charge with no authentication required.

What you get from the API:

- List all characters: `GET /character`
- Filter characters by name: `GET /character?name={name}`
- Fetch a single character by id: `GET /character/{id}`
- Both REST and GraphQL interfaces are exposed against the same data set.

The service has CORS enabled on all endpoints and is suitable for browser-side use. No rate limits are documented, but response times are typically in the 1.5–2.5 second range, so client-side caching is recommended for any UI that pages or auto-completes against the character list.

## Try it

**TypeScript**
```bash
npm install disney
```

**Python**
```bash
pip install disney-sdk
```

**PHP**
```bash
composer require voxgig/disney-sdk
```

**Golang**
```bash
go get github.com/voxgig-sdk/disney-sdk/go
```

**Ruby**
```bash
gem install disney-sdk
```

**Lua**
```bash
luarocks install disney-sdk
```

## 30-second quickstart

### TypeScript

```ts
import { DisneySDK } from 'disney'

const client = new DisneySDK({})

// List all characters
const characters = await client.Character().list()
```

See the [TypeScript README](ts/README.md) for the
full guide, or scroll down for the same example in other languages.

## What's in the box

| Surface | Use it for | Path |
| --- | --- | --- |
| **SDK** (TypeScript, Python, PHP, Golang, Ruby, Lua) | App integration | `ts/` `py/` `php/` `go/` `rb/` `lua/` |
| **CLI** | Scripts, CI, ops, one-off API calls | `go-cli/` |
| **MCP server** | AI agents (Claude, Cursor, Cline) | `go-mcp/` |

## Use it from an AI agent (MCP)

The generated MCP server exposes every operation in this SDK as an
[MCP](https://modelcontextprotocol.io) tool that Claude, Cursor or Cline
can call directly. Build and register it:

```bash
cd go-mcp && go build -o disney-mcp .
```

Then add it to your agent's MCP config (Claude Desktop, Cursor, etc.):

```json
{
  "mcpServers": {
    "disney": {
      "command": "/abs/path/to/disney-mcp"
    }
  }
}
```

## Entities

The API exposes one entity:

| Entity | Description | API path |
| --- | --- | --- |
| **Character** | A single Disney character record, addressable via `GET /character`, `GET /character?name={name}` for name filtering, and `GET /character/{id}` for a specific character. | `/character` |

Each entity supports the following operations where available: **load**,
**list**, **create**, **update**, and **remove**.

## Quickstart in other languages

### Python

```python
from disney_sdk import DisneySDK

client = DisneySDK({})

# List all characters
characters, err = client.Character(None).list(None, None)

# Load a specific character
character, err = client.Character(None).load(
    {"id": "example_id"}, None
)
```

### PHP

```php
<?php
require_once 'disney_sdk.php';

$client = new DisneySDK([]);

// List all characters
[$characters, $err] = $client->Character(null)->list(null, null);

// Load a specific character
[$character, $err] = $client->Character(null)->load(
    ["id" => "example_id"], null
);
```

### Golang

```go
import sdk "github.com/voxgig-sdk/disney-sdk/go"

client := sdk.NewDisneySDK(map[string]any{})

// List all characters
characters, err := client.Character(nil).List(nil, nil)
```

### Ruby

```ruby
require_relative "Disney_sdk"

client = DisneySDK.new({})

# List all characters
characters, err = client.Character(nil).list(nil, nil)

# Load a specific character
character, err = client.Character(nil).load(
  { "id" => "example_id" }, nil
)
```

### Lua

```lua
local sdk = require("disney_sdk")

local client = sdk.new({})

-- List all characters
local characters, err = client:Character(nil):list(nil, nil)

-- Load a specific character
local character, err = client:Character(nil):load(
  { id = "example_id" }, nil
)
```

## Unit testing in offline mode

Every SDK ships a test mode that swaps the HTTP transport for an
in-memory mock, so unit tests run offline.

### TypeScript

```ts
const client = DisneySDK.test()
const result = await client.Character().load({ id: 'test01' })
// result.ok === true, result.data contains mock data
```

### Python

```python
client = DisneySDK.test(None, None)
result, err = client.Character(None).load(
    {"id": "test01"}, None
)
```

### PHP

```php
$client = DisneySDK::test(null, null);
[$result, $err] = $client->Character(null)->load(
    ["id" => "test01"], null
);
```

### Golang

```go
client := sdk.TestSDK(nil, nil)
result, err := client.Character(nil).Load(
    map[string]any{"id": "test01"}, nil,
)
```

### Ruby

```ruby
client = DisneySDK.test(nil, nil)
result, err = client.Character(nil).load(
  { "id" => "test01" }, nil
)
```

### Lua

```lua
local client = sdk.test(nil, nil)
local result, err = client:Character(nil):load(
  { id = "test01" }, nil
)
```

## How it works

Every SDK call runs the same five-stage pipeline:

1. **Point** — resolve the API endpoint from the operation definition.
2. **Spec** — build the HTTP specification (URL, method, headers, body).
3. **Request** — send the HTTP request.
4. **Response** — receive and parse the response.
5. **Result** — extract the result data for the caller.

A feature hook fires at each stage (e.g. `PrePoint`, `PreSpec`,
`PreRequest`), so features can inspect or modify the pipeline without
forking the SDK.

### Features

| Feature | Purpose |
| --- | --- |
| **TestFeature** | In-memory mock transport for testing without a live server |

Pass custom features via the `extend` option at construction time.

### Direct and Prepare

For endpoints the entity model doesn't cover, use the low-level methods:

- **`direct(fetchargs)`** — build and send an HTTP request in one step.
- **`prepare(fetchargs)`** — build the request without sending it.

Both accept a map with `path`, `method`, `params`, `query`,
`headers`, and `body`. See the [How-to guides](#how-to-guides) below.

## How-to guides

### Make a direct API call

When the entity interface does not cover an endpoint, use `direct`:

**TypeScript:**
```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})
console.log(result.data)
```

**Python:**
```python
result, err = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example"},
})
```

**PHP:**
```php
[$result, $err] = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example"],
]);
```

**Go:**
```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
```

**Ruby:**
```ruby
result, err = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example" },
})
```

**Lua:**
```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example" },
})
```

## Per-language documentation

- [TypeScript](ts/README.md)
- [Python](py/README.md)
- [PHP](php/README.md)
- [Golang](go/README.md)
- [Ruby](rb/README.md)
- [Lua](lua/README.md)

## Using the Disney API

- Upstream: [https://disneyapi.dev](https://disneyapi.dev)

- No licence is published on the API site; treat the service as a community resource that may change or disappear.
- Disney character names, images, and likenesses remain trademarks/copyrights of The Walt Disney Company and its subsidiaries.
- The API is not affiliated with or endorsed by Disney; use accordingly and check Disney's terms before any redistribution.

---

Generated from the Disney API OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).
