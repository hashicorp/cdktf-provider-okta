// https://www.terraform.io/docs/providers/okta/r/admin_role_custom_assignments
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AdminRoleCustomAssignmentsConfig extends cdktf.TerraformMetaArguments {
  /**
  * ID of the Custom Role
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/admin_role_custom_assignments#custom_role_id AdminRoleCustomAssignments#custom_role_id}
  */
  readonly customRoleId: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/admin_role_custom_assignments#id AdminRoleCustomAssignments#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The hrefs that point to User(s) and/or Group(s) that receive the Role
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/admin_role_custom_assignments#members AdminRoleCustomAssignments#members}
  */
  readonly members?: string[];
  /**
  * ID of the target Resource Set
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/admin_role_custom_assignments#resource_set_id AdminRoleCustomAssignments#resource_set_id}
  */
  readonly resourceSetId: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/okta/r/admin_role_custom_assignments okta_admin_role_custom_assignments}
*/
export class AdminRoleCustomAssignments extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "okta_admin_role_custom_assignments";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/okta/r/admin_role_custom_assignments okta_admin_role_custom_assignments} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AdminRoleCustomAssignmentsConfig
  */
  public constructor(scope: Construct, id: string, config: AdminRoleCustomAssignmentsConfig) {
    super(scope, id, {
      terraformResourceType: 'okta_admin_role_custom_assignments',
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
    this._customRoleId = config.customRoleId;
    this._id = config.id;
    this._members = config.members;
    this._resourceSetId = config.resourceSetId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // custom_role_id - computed: false, optional: false, required: true
  private _customRoleId?: string; 
  public get customRoleId() {
    return this.getStringAttribute('custom_role_id');
  }
  public set customRoleId(value: string) {
    this._customRoleId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get customRoleIdInput() {
    return this._customRoleId;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // members - computed: false, optional: true, required: false
  private _members?: string[]; 
  public get members() {
    return cdktf.Fn.tolist(this.getListAttribute('members'));
  }
  public set members(value: string[]) {
    this._members = value;
  }
  public resetMembers() {
    this._members = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get membersInput() {
    return this._members;
  }

  // resource_set_id - computed: false, optional: false, required: true
  private _resourceSetId?: string; 
  public get resourceSetId() {
    return this.getStringAttribute('resource_set_id');
  }
  public set resourceSetId(value: string) {
    this._resourceSetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceSetIdInput() {
    return this._resourceSetId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      custom_role_id: cdktf.stringToTerraform(this._customRoleId),
      id: cdktf.stringToTerraform(this._id),
      members: cdktf.listMapper(cdktf.stringToTerraform)(this._members),
      resource_set_id: cdktf.stringToTerraform(this._resourceSetId),
    };
  }
}
