// https://www.terraform.io/docs/providers/okta/r/rate_limiting.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RateLimitingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Called during authentication.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/rate_limiting.html#authorize RateLimiting#authorize}
  */
  readonly authorize: string;
  /**
  * Enables rate limit warning, violation, notification emails and banners when this org meets rate limits.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/rate_limiting.html#communications_enabled RateLimiting#communications_enabled}
  */
  readonly communicationsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Called when accessing the Okta hosted login page.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/rate_limiting.html#login RateLimiting#login}
  */
  readonly login: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/okta/r/rate_limiting.html okta_rate_limiting}
*/
export class RateLimiting extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "okta_rate_limiting";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/okta/r/rate_limiting.html okta_rate_limiting} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RateLimitingConfig
  */
  public constructor(scope: Construct, id: string, config: RateLimitingConfig) {
    super(scope, id, {
      terraformResourceType: 'okta_rate_limiting',
      terraformGeneratorMetadata: {
        providerName: 'okta'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._authorize = config.authorize;
    this._communicationsEnabled = config.communicationsEnabled;
    this._login = config.login;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // authorize - computed: false, optional: false, required: true
  private _authorize?: string; 
  public get authorize() {
    return this.getStringAttribute('authorize');
  }
  public set authorize(value: string) {
    this._authorize = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizeInput() {
    return this._authorize;
  }

  // communications_enabled - computed: false, optional: true, required: false
  private _communicationsEnabled?: boolean | cdktf.IResolvable; 
  public get communicationsEnabled() {
    return this.getBooleanAttribute('communications_enabled') as any;
  }
  public set communicationsEnabled(value: boolean | cdktf.IResolvable) {
    this._communicationsEnabled = value;
  }
  public resetCommunicationsEnabled() {
    this._communicationsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get communicationsEnabledInput() {
    return this._communicationsEnabled;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // login - computed: false, optional: false, required: true
  private _login?: string; 
  public get login() {
    return this.getStringAttribute('login');
  }
  public set login(value: string) {
    this._login = value;
  }
  // Temporarily expose input value. Use with caution.
  public get loginInput() {
    return this._login;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      authorize: cdktf.stringToTerraform(this._authorize),
      communications_enabled: cdktf.booleanToTerraform(this._communicationsEnabled),
      login: cdktf.stringToTerraform(this._login),
    };
  }
}
