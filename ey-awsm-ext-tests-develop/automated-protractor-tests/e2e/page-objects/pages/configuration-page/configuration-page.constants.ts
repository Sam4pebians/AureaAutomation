export class ConfigurationPageConstants {

    static get configurationDropDownsSelectors() {
        return {
            instanceSizeId: 'cluster_configuration_default_instance_size',
            selectBlueprintsId: 'uniform-select_blueprints',
            externalAddressesId: 'uniform-cluster_configuration_ip_id'
        };
    }

    static get configurationDropDownValues() {
        return {
            mFourLarge: 'm4.large - General Purpose (M4) Large'
        };
    }

    static get configurationRadioButtonSelectors() {
        return {
            singleInstanceId: 'uniform-configuration_single',
            stagingConfigurationId: 'uniform-configuration_cluster',
            customConfigurationId: 'uniform-configuration_custom'
        };
    }
}
