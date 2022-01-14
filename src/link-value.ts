// https://www.terraform.io/docs/providers/okta/r/link_value
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LinkValueConfig extends cdktf.TerraformMetaArguments {
  /**
  * Set of User IDs or login values of the users to be assigned the 'associated' relationship.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/link_value#associated_user_ids LinkValue#associated_user_ids}
  */
  readonly associatedUserIds?: string[];
  /**
  * Name of the 'primary' relationship being assigned.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/link_value#primary_name LinkValue#primary_name}
  */
  readonly primaryName: string;
  /**
  * User ID to be assigned to 'primary' for the 'associated' user in the specified relationship.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/link_value#primary_user_id LinkValue#primary_user_id}
  */
  readonly primaryUserId: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/okta/r/link_value okta_link_value}
*/
export class LinkValue extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "okta_link_value";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/okta/r/link_value okta_link_value} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LinkValueConfig
  */
  public constructor(scope: Construct, id: string, config: LinkValueConfig) {
    super(scope, id, {
      terraformResourceType: 'okta_link_value',
      terraformGeneratorMetadata: {
        providerName: 'okta'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._associatedUserIds = config.associatedUserIds;
    this._primaryName = config.primaryName;
    this._primaryUserId = config.primaryUserId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // associated_user_ids - computed: false, optional: true, required: false
  private _associatedUserIds?: string[]; 
  public get associatedUserIds() {
    return this.getListAttribute('associated_user_ids');
  }
  public set associatedUserIds(value: string[]) {
    this._associatedUserIds = value;
  }
  public resetAssociatedUserIds() {
    this._associatedUserIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get associatedUserIdsInput() {
    return this._associatedUserIds;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // primary_name - computed: false, optional: false, required: true
  private _primaryName?: string; 
  public get primaryName() {
    return this.getStringAttribute('primary_name');
  }
  public set primaryName(value: string) {
    this._primaryName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryNameInput() {
    return this._primaryName;
  }

  // primary_user_id - computed: false, optional: false, required: true
  private _primaryUserId?: string; 
  public get primaryUserId() {
    return this.getStringAttribute('primary_user_id');
  }
  public set primaryUserId(value: string) {
    this._primaryUserId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryUserIdInput() {
    return this._primaryUserId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      associated_user_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._associatedUserIds),
      primary_name: cdktf.stringToTerraform(this._primaryName),
      primary_user_id: cdktf.stringToTerraform(this._primaryUserId),
    };
  }
}
