<?php
declare(strict_types=1);

// Disney SDK base feature

class DisneyBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    // Positions this feature when added via the client `extend` option:
    // "__before__" / "__after__" / "__replace__" name an already-added
    // feature (mirrors the ts feature `_options`). Declared so setting it
    // on an extension instance avoids the dynamic-property deprecation.
    public ?array $_options = null;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(DisneyContext $ctx, array $options): void {}
    public function PostConstruct(DisneyContext $ctx): void {}
    public function PostConstructEntity(DisneyContext $ctx): void {}
    public function SetData(DisneyContext $ctx): void {}
    public function GetData(DisneyContext $ctx): void {}
    public function GetMatch(DisneyContext $ctx): void {}
    public function SetMatch(DisneyContext $ctx): void {}
    public function PrePoint(DisneyContext $ctx): void {}
    public function PreSpec(DisneyContext $ctx): void {}
    public function PreRequest(DisneyContext $ctx): void {}
    public function PreResponse(DisneyContext $ctx): void {}
    public function PreResult(DisneyContext $ctx): void {}
    public function PreDone(DisneyContext $ctx): void {}
    public function PreUnexpected(DisneyContext $ctx): void {}
}
