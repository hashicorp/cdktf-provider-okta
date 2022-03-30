// https://www.terraform.io/docs/providers/okta/r/policy_profile_enrollment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PolicyProfileEnrollmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name of the policy
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/policy_profile_enrollment#name PolicyProfileEnrollment#name}
  */
  readonly name: string;
  /**
  * Status of the policy
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/policy_profile_enrollment#status PolicyProfileEnrollment#status}
  */
  readonly status?: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/okta/r/policy_profile_enrollment okta_policy_profile_enrollment}
*/
export class PolicyProfileEnrollment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "okta_policy_profile_enrollment";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/okta/r/policy_profile_enrollment okta_policy_profile_enrollment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PolicyProfileEnrollmentConfig
  */
  public constructor(scope: Construct, id: string, config: PolicyProfileEnrollmentConfig) {
    super(scope, id, {
      terraformResourceType: 'okta_policy_profile_enrollment',
      terraformGeneratorMetadata: {
        providerName: 'okta',
        providerVersion: '3.20.8',
        providerVersionConstraint: '~> 3.20.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._name = config.name;
    this._status = config.status;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // status - computed: false, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      status: cdktf.stringToTerraform(this._status),
    };
  }
}
