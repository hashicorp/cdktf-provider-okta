// https://www.terraform.io/docs/providers/okta/d/app_user_assignments
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOktaAppUserAssignmentsConfig extends cdktf.TerraformMetaArguments {
  /**
  * ID of the Okta App being queried for groups
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/d/app_user_assignments#id DataOktaAppUserAssignments#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/okta/d/app_user_assignments okta_app_user_assignments}
*/
export class DataOktaAppUserAssignments extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "okta_app_user_assignments";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/okta/d/app_user_assignments okta_app_user_assignments} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOktaAppUserAssignmentsConfig
  */
  public constructor(scope: Construct, id: string, config: DataOktaAppUserAssignmentsConfig) {
    super(scope, id, {
      terraformResourceType: 'okta_app_user_assignments',
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
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // users - computed: true, optional: false, required: false
  public get users() {
    return cdktf.Fn.tolist(this.getListAttribute('users'));
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
    };
  }
}
