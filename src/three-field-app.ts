// https://www.terraform.io/docs/providers/okta/r/three_field_app.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ThreeFieldAppConfig extends cdktf.TerraformMetaArguments {
  /**
  * Custom error page URL
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/three_field_app.html#accessibility_error_redirect_url ThreeFieldApp#accessibility_error_redirect_url}
  */
  readonly accessibilityErrorRedirectUrl?: string;
  /**
  * Custom login page URL
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/three_field_app.html#accessibility_login_redirect_url ThreeFieldApp#accessibility_login_redirect_url}
  */
  readonly accessibilityLoginRedirectUrl?: string;
  /**
  * Enable self service
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/three_field_app.html#accessibility_self_service ThreeFieldApp#accessibility_self_service}
  */
  readonly accessibilitySelfService?: boolean | cdktf.IResolvable;
  /**
  * Application notes for admins.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/three_field_app.html#admin_note ThreeFieldApp#admin_note}
  */
  readonly adminNote?: string;
  /**
  * Displays specific appLinks for the app
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/three_field_app.html#app_links_json ThreeFieldApp#app_links_json}
  */
  readonly appLinksJson?: string;
  /**
  * Display auto submit toolbar
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/three_field_app.html#auto_submit_toolbar ThreeFieldApp#auto_submit_toolbar}
  */
  readonly autoSubmitToolbar?: boolean | cdktf.IResolvable;
  /**
  * Login button field CSS selector
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/three_field_app.html#button_selector ThreeFieldApp#button_selector}
  */
  readonly buttonSelector: string;
  /**
  * Application credentials scheme
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/three_field_app.html#credentials_scheme ThreeFieldApp#credentials_scheme}
  */
  readonly credentialsScheme?: string;
  /**
  * Application notes for end users.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/three_field_app.html#enduser_note ThreeFieldApp#enduser_note}
  */
  readonly enduserNote?: string;
  /**
  * Extra field CSS selector
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/three_field_app.html#extra_field_selector ThreeFieldApp#extra_field_selector}
  */
  readonly extraFieldSelector: string;
  /**
  * Value for extra form field
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/three_field_app.html#extra_field_value ThreeFieldApp#extra_field_value}
  */
  readonly extraFieldValue: string;
  /**
  * Groups associated with the application
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/three_field_app.html#groups ThreeFieldApp#groups}
  */
  readonly groups?: string[];
  /**
  * Do not display application icon on mobile app
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/three_field_app.html#hide_ios ThreeFieldApp#hide_ios}
  */
  readonly hideIos?: boolean | cdktf.IResolvable;
  /**
  * Do not display application icon to users
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/three_field_app.html#hide_web ThreeFieldApp#hide_web}
  */
  readonly hideWeb?: boolean | cdktf.IResolvable;
  /**
  * Pretty name of app.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/three_field_app.html#label ThreeFieldApp#label}
  */
  readonly label: string;
  /**
  * Local path to logo of the application.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/three_field_app.html#logo ThreeFieldApp#logo}
  */
  readonly logo?: string;
  /**
  * Login password field CSS selector
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/three_field_app.html#password_selector ThreeFieldApp#password_selector}
  */
  readonly passwordSelector: string;
  /**
  * Allow user to reveal password
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/three_field_app.html#reveal_password ThreeFieldApp#reveal_password}
  */
  readonly revealPassword?: boolean | cdktf.IResolvable;
  /**
  * Shared password, required for certain schemes.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/three_field_app.html#shared_password ThreeFieldApp#shared_password}
  */
  readonly sharedPassword?: string;
  /**
  * Shared username, required for certain schemes.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/three_field_app.html#shared_username ThreeFieldApp#shared_username}
  */
  readonly sharedUsername?: string;
  /**
  * Ignore groups sync. This is a temporary solution until 'groups' field is supported in all the app-like resources
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/three_field_app.html#skip_groups ThreeFieldApp#skip_groups}
  */
  readonly skipGroups?: boolean | cdktf.IResolvable;
  /**
  * Ignore users sync. This is a temporary solution until 'users' field is supported in all the app-like resources
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/three_field_app.html#skip_users ThreeFieldApp#skip_users}
  */
  readonly skipUsers?: boolean | cdktf.IResolvable;
  /**
  * Status of application.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/three_field_app.html#status ThreeFieldApp#status}
  */
  readonly status?: string;
  /**
  * Login URL
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/three_field_app.html#url ThreeFieldApp#url}
  */
  readonly url: string;
  /**
  * A regex that further restricts URL to the specified regex
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/three_field_app.html#url_regex ThreeFieldApp#url_regex}
  */
  readonly urlRegex?: string;
  /**
  * Username template
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/three_field_app.html#user_name_template ThreeFieldApp#user_name_template}
  */
  readonly userNameTemplate?: string;
  /**
  * Push username on update
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/three_field_app.html#user_name_template_push_status ThreeFieldApp#user_name_template_push_status}
  */
  readonly userNameTemplatePushStatus?: string;
  /**
  * Username template suffix
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/three_field_app.html#user_name_template_suffix ThreeFieldApp#user_name_template_suffix}
  */
  readonly userNameTemplateSuffix?: string;
  /**
  * Username template type
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/three_field_app.html#user_name_template_type ThreeFieldApp#user_name_template_type}
  */
  readonly userNameTemplateType?: string;
  /**
  * Login username field CSS selector
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/three_field_app.html#username_selector ThreeFieldApp#username_selector}
  */
  readonly usernameSelector: string;
  /**
  * users block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/three_field_app.html#users ThreeFieldApp#users}
  */
  readonly users?: ThreeFieldAppUsers[];
}
export interface ThreeFieldAppUsers {
  /**
  * User ID.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/three_field_app.html#id ThreeFieldApp#id}
  */
  readonly id?: string;
  /**
  * Password for user application.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/three_field_app.html#password ThreeFieldApp#password}
  */
  readonly password?: string;
  /**
  * Username for user.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/okta/r/three_field_app.html#username ThreeFieldApp#username}
  */
  readonly username?: string;
}

export function threeFieldAppUsersToTerraform(struct?: ThreeFieldAppUsers): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    password: cdktf.stringToTerraform(struct!.password),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/okta/r/three_field_app.html okta_three_field_app}
*/
export class ThreeFieldApp extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "okta_three_field_app";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/okta/r/three_field_app.html okta_three_field_app} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ThreeFieldAppConfig
  */
  public constructor(scope: Construct, id: string, config: ThreeFieldAppConfig) {
    super(scope, id, {
      terraformResourceType: 'okta_three_field_app',
      terraformGeneratorMetadata: {
        providerName: 'okta'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._accessibilityErrorRedirectUrl = config.accessibilityErrorRedirectUrl;
    this._accessibilityLoginRedirectUrl = config.accessibilityLoginRedirectUrl;
    this._accessibilitySelfService = config.accessibilitySelfService;
    this._adminNote = config.adminNote;
    this._appLinksJson = config.appLinksJson;
    this._autoSubmitToolbar = config.autoSubmitToolbar;
    this._buttonSelector = config.buttonSelector;
    this._credentialsScheme = config.credentialsScheme;
    this._enduserNote = config.enduserNote;
    this._extraFieldSelector = config.extraFieldSelector;
    this._extraFieldValue = config.extraFieldValue;
    this._groups = config.groups;
    this._hideIos = config.hideIos;
    this._hideWeb = config.hideWeb;
    this._label = config.label;
    this._logo = config.logo;
    this._passwordSelector = config.passwordSelector;
    this._revealPassword = config.revealPassword;
    this._sharedPassword = config.sharedPassword;
    this._sharedUsername = config.sharedUsername;
    this._skipGroups = config.skipGroups;
    this._skipUsers = config.skipUsers;
    this._status = config.status;
    this._url = config.url;
    this._urlRegex = config.urlRegex;
    this._userNameTemplate = config.userNameTemplate;
    this._userNameTemplatePushStatus = config.userNameTemplatePushStatus;
    this._userNameTemplateSuffix = config.userNameTemplateSuffix;
    this._userNameTemplateType = config.userNameTemplateType;
    this._usernameSelector = config.usernameSelector;
    this._users = config.users;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // accessibility_error_redirect_url - computed: false, optional: true, required: false
  private _accessibilityErrorRedirectUrl?: string; 
  public get accessibilityErrorRedirectUrl() {
    return this.getStringAttribute('accessibility_error_redirect_url');
  }
  public set accessibilityErrorRedirectUrl(value: string) {
    this._accessibilityErrorRedirectUrl = value;
  }
  public resetAccessibilityErrorRedirectUrl() {
    this._accessibilityErrorRedirectUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessibilityErrorRedirectUrlInput() {
    return this._accessibilityErrorRedirectUrl;
  }

  // accessibility_login_redirect_url - computed: false, optional: true, required: false
  private _accessibilityLoginRedirectUrl?: string; 
  public get accessibilityLoginRedirectUrl() {
    return this.getStringAttribute('accessibility_login_redirect_url');
  }
  public set accessibilityLoginRedirectUrl(value: string) {
    this._accessibilityLoginRedirectUrl = value;
  }
  public resetAccessibilityLoginRedirectUrl() {
    this._accessibilityLoginRedirectUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessibilityLoginRedirectUrlInput() {
    return this._accessibilityLoginRedirectUrl;
  }

  // accessibility_self_service - computed: false, optional: true, required: false
  private _accessibilitySelfService?: boolean | cdktf.IResolvable; 
  public get accessibilitySelfService() {
    return this.getBooleanAttribute('accessibility_self_service') as any;
  }
  public set accessibilitySelfService(value: boolean | cdktf.IResolvable) {
    this._accessibilitySelfService = value;
  }
  public resetAccessibilitySelfService() {
    this._accessibilitySelfService = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessibilitySelfServiceInput() {
    return this._accessibilitySelfService;
  }

  // admin_note - computed: false, optional: true, required: false
  private _adminNote?: string; 
  public get adminNote() {
    return this.getStringAttribute('admin_note');
  }
  public set adminNote(value: string) {
    this._adminNote = value;
  }
  public resetAdminNote() {
    this._adminNote = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminNoteInput() {
    return this._adminNote;
  }

  // app_links_json - computed: false, optional: true, required: false
  private _appLinksJson?: string; 
  public get appLinksJson() {
    return this.getStringAttribute('app_links_json');
  }
  public set appLinksJson(value: string) {
    this._appLinksJson = value;
  }
  public resetAppLinksJson() {
    this._appLinksJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appLinksJsonInput() {
    return this._appLinksJson;
  }

  // auto_submit_toolbar - computed: false, optional: true, required: false
  private _autoSubmitToolbar?: boolean | cdktf.IResolvable; 
  public get autoSubmitToolbar() {
    return this.getBooleanAttribute('auto_submit_toolbar') as any;
  }
  public set autoSubmitToolbar(value: boolean | cdktf.IResolvable) {
    this._autoSubmitToolbar = value;
  }
  public resetAutoSubmitToolbar() {
    this._autoSubmitToolbar = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoSubmitToolbarInput() {
    return this._autoSubmitToolbar;
  }

  // button_selector - computed: false, optional: false, required: true
  private _buttonSelector?: string; 
  public get buttonSelector() {
    return this.getStringAttribute('button_selector');
  }
  public set buttonSelector(value: string) {
    this._buttonSelector = value;
  }
  // Temporarily expose input value. Use with caution.
  public get buttonSelectorInput() {
    return this._buttonSelector;
  }

  // credentials_scheme - computed: false, optional: true, required: false
  private _credentialsScheme?: string; 
  public get credentialsScheme() {
    return this.getStringAttribute('credentials_scheme');
  }
  public set credentialsScheme(value: string) {
    this._credentialsScheme = value;
  }
  public resetCredentialsScheme() {
    this._credentialsScheme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsSchemeInput() {
    return this._credentialsScheme;
  }

  // enduser_note - computed: false, optional: true, required: false
  private _enduserNote?: string; 
  public get enduserNote() {
    return this.getStringAttribute('enduser_note');
  }
  public set enduserNote(value: string) {
    this._enduserNote = value;
  }
  public resetEnduserNote() {
    this._enduserNote = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enduserNoteInput() {
    return this._enduserNote;
  }

  // extra_field_selector - computed: false, optional: false, required: true
  private _extraFieldSelector?: string; 
  public get extraFieldSelector() {
    return this.getStringAttribute('extra_field_selector');
  }
  public set extraFieldSelector(value: string) {
    this._extraFieldSelector = value;
  }
  // Temporarily expose input value. Use with caution.
  public get extraFieldSelectorInput() {
    return this._extraFieldSelector;
  }

  // extra_field_value - computed: false, optional: false, required: true
  private _extraFieldValue?: string; 
  public get extraFieldValue() {
    return this.getStringAttribute('extra_field_value');
  }
  public set extraFieldValue(value: string) {
    this._extraFieldValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get extraFieldValueInput() {
    return this._extraFieldValue;
  }

  // groups - computed: false, optional: true, required: false
  private _groups?: string[]; 
  public get groups() {
    return this.getListAttribute('groups');
  }
  public set groups(value: string[]) {
    this._groups = value;
  }
  public resetGroups() {
    this._groups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupsInput() {
    return this._groups;
  }

  // hide_ios - computed: false, optional: true, required: false
  private _hideIos?: boolean | cdktf.IResolvable; 
  public get hideIos() {
    return this.getBooleanAttribute('hide_ios') as any;
  }
  public set hideIos(value: boolean | cdktf.IResolvable) {
    this._hideIos = value;
  }
  public resetHideIos() {
    this._hideIos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hideIosInput() {
    return this._hideIos;
  }

  // hide_web - computed: false, optional: true, required: false
  private _hideWeb?: boolean | cdktf.IResolvable; 
  public get hideWeb() {
    return this.getBooleanAttribute('hide_web') as any;
  }
  public set hideWeb(value: boolean | cdktf.IResolvable) {
    this._hideWeb = value;
  }
  public resetHideWeb() {
    this._hideWeb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hideWebInput() {
    return this._hideWeb;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // label - computed: false, optional: false, required: true
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }

  // logo - computed: false, optional: true, required: false
  private _logo?: string; 
  public get logo() {
    return this.getStringAttribute('logo');
  }
  public set logo(value: string) {
    this._logo = value;
  }
  public resetLogo() {
    this._logo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logoInput() {
    return this._logo;
  }

  // logo_url - computed: true, optional: false, required: false
  public get logoUrl() {
    return this.getStringAttribute('logo_url');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // password_selector - computed: false, optional: false, required: true
  private _passwordSelector?: string; 
  public get passwordSelector() {
    return this.getStringAttribute('password_selector');
  }
  public set passwordSelector(value: string) {
    this._passwordSelector = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordSelectorInput() {
    return this._passwordSelector;
  }

  // reveal_password - computed: false, optional: true, required: false
  private _revealPassword?: boolean | cdktf.IResolvable; 
  public get revealPassword() {
    return this.getBooleanAttribute('reveal_password') as any;
  }
  public set revealPassword(value: boolean | cdktf.IResolvable) {
    this._revealPassword = value;
  }
  public resetRevealPassword() {
    this._revealPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revealPasswordInput() {
    return this._revealPassword;
  }

  // shared_password - computed: false, optional: true, required: false
  private _sharedPassword?: string; 
  public get sharedPassword() {
    return this.getStringAttribute('shared_password');
  }
  public set sharedPassword(value: string) {
    this._sharedPassword = value;
  }
  public resetSharedPassword() {
    this._sharedPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedPasswordInput() {
    return this._sharedPassword;
  }

  // shared_username - computed: false, optional: true, required: false
  private _sharedUsername?: string; 
  public get sharedUsername() {
    return this.getStringAttribute('shared_username');
  }
  public set sharedUsername(value: string) {
    this._sharedUsername = value;
  }
  public resetSharedUsername() {
    this._sharedUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedUsernameInput() {
    return this._sharedUsername;
  }

  // sign_on_mode - computed: true, optional: false, required: false
  public get signOnMode() {
    return this.getStringAttribute('sign_on_mode');
  }

  // skip_groups - computed: false, optional: true, required: false
  private _skipGroups?: boolean | cdktf.IResolvable; 
  public get skipGroups() {
    return this.getBooleanAttribute('skip_groups') as any;
  }
  public set skipGroups(value: boolean | cdktf.IResolvable) {
    this._skipGroups = value;
  }
  public resetSkipGroups() {
    this._skipGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipGroupsInput() {
    return this._skipGroups;
  }

  // skip_users - computed: false, optional: true, required: false
  private _skipUsers?: boolean | cdktf.IResolvable; 
  public get skipUsers() {
    return this.getBooleanAttribute('skip_users') as any;
  }
  public set skipUsers(value: boolean | cdktf.IResolvable) {
    this._skipUsers = value;
  }
  public resetSkipUsers() {
    this._skipUsers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipUsersInput() {
    return this._skipUsers;
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

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // url_regex - computed: false, optional: true, required: false
  private _urlRegex?: string; 
  public get urlRegex() {
    return this.getStringAttribute('url_regex');
  }
  public set urlRegex(value: string) {
    this._urlRegex = value;
  }
  public resetUrlRegex() {
    this._urlRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlRegexInput() {
    return this._urlRegex;
  }

  // user_name_template - computed: false, optional: true, required: false
  private _userNameTemplate?: string; 
  public get userNameTemplate() {
    return this.getStringAttribute('user_name_template');
  }
  public set userNameTemplate(value: string) {
    this._userNameTemplate = value;
  }
  public resetUserNameTemplate() {
    this._userNameTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userNameTemplateInput() {
    return this._userNameTemplate;
  }

  // user_name_template_push_status - computed: false, optional: true, required: false
  private _userNameTemplatePushStatus?: string; 
  public get userNameTemplatePushStatus() {
    return this.getStringAttribute('user_name_template_push_status');
  }
  public set userNameTemplatePushStatus(value: string) {
    this._userNameTemplatePushStatus = value;
  }
  public resetUserNameTemplatePushStatus() {
    this._userNameTemplatePushStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userNameTemplatePushStatusInput() {
    return this._userNameTemplatePushStatus;
  }

  // user_name_template_suffix - computed: false, optional: true, required: false
  private _userNameTemplateSuffix?: string; 
  public get userNameTemplateSuffix() {
    return this.getStringAttribute('user_name_template_suffix');
  }
  public set userNameTemplateSuffix(value: string) {
    this._userNameTemplateSuffix = value;
  }
  public resetUserNameTemplateSuffix() {
    this._userNameTemplateSuffix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userNameTemplateSuffixInput() {
    return this._userNameTemplateSuffix;
  }

  // user_name_template_type - computed: false, optional: true, required: false
  private _userNameTemplateType?: string; 
  public get userNameTemplateType() {
    return this.getStringAttribute('user_name_template_type');
  }
  public set userNameTemplateType(value: string) {
    this._userNameTemplateType = value;
  }
  public resetUserNameTemplateType() {
    this._userNameTemplateType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userNameTemplateTypeInput() {
    return this._userNameTemplateType;
  }

  // username_selector - computed: false, optional: false, required: true
  private _usernameSelector?: string; 
  public get usernameSelector() {
    return this.getStringAttribute('username_selector');
  }
  public set usernameSelector(value: string) {
    this._usernameSelector = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameSelectorInput() {
    return this._usernameSelector;
  }

  // users - computed: false, optional: true, required: false
  private _users?: ThreeFieldAppUsers[]; 
  public get users() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('users') as any;
  }
  public set users(value: ThreeFieldAppUsers[]) {
    this._users = value;
  }
  public resetUsers() {
    this._users = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usersInput() {
    return this._users;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      accessibility_error_redirect_url: cdktf.stringToTerraform(this._accessibilityErrorRedirectUrl),
      accessibility_login_redirect_url: cdktf.stringToTerraform(this._accessibilityLoginRedirectUrl),
      accessibility_self_service: cdktf.booleanToTerraform(this._accessibilitySelfService),
      admin_note: cdktf.stringToTerraform(this._adminNote),
      app_links_json: cdktf.stringToTerraform(this._appLinksJson),
      auto_submit_toolbar: cdktf.booleanToTerraform(this._autoSubmitToolbar),
      button_selector: cdktf.stringToTerraform(this._buttonSelector),
      credentials_scheme: cdktf.stringToTerraform(this._credentialsScheme),
      enduser_note: cdktf.stringToTerraform(this._enduserNote),
      extra_field_selector: cdktf.stringToTerraform(this._extraFieldSelector),
      extra_field_value: cdktf.stringToTerraform(this._extraFieldValue),
      groups: cdktf.listMapper(cdktf.stringToTerraform)(this._groups),
      hide_ios: cdktf.booleanToTerraform(this._hideIos),
      hide_web: cdktf.booleanToTerraform(this._hideWeb),
      label: cdktf.stringToTerraform(this._label),
      logo: cdktf.stringToTerraform(this._logo),
      password_selector: cdktf.stringToTerraform(this._passwordSelector),
      reveal_password: cdktf.booleanToTerraform(this._revealPassword),
      shared_password: cdktf.stringToTerraform(this._sharedPassword),
      shared_username: cdktf.stringToTerraform(this._sharedUsername),
      skip_groups: cdktf.booleanToTerraform(this._skipGroups),
      skip_users: cdktf.booleanToTerraform(this._skipUsers),
      status: cdktf.stringToTerraform(this._status),
      url: cdktf.stringToTerraform(this._url),
      url_regex: cdktf.stringToTerraform(this._urlRegex),
      user_name_template: cdktf.stringToTerraform(this._userNameTemplate),
      user_name_template_push_status: cdktf.stringToTerraform(this._userNameTemplatePushStatus),
      user_name_template_suffix: cdktf.stringToTerraform(this._userNameTemplateSuffix),
      user_name_template_type: cdktf.stringToTerraform(this._userNameTemplateType),
      username_selector: cdktf.stringToTerraform(this._usernameSelector),
      users: cdktf.listMapper(threeFieldAppUsersToTerraform)(this._users),
    };
  }
}
