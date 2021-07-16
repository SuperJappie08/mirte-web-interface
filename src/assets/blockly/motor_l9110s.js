export function load (Blockly, instances) {

    if (instances.length === 0) {
        instances = [["NO PERIPHERAL CONFIGURED","NO PERIPHERAL CONFIGURED"]]
    }

    Blockly.Blocks['set_speed_motor_l9110s'] = {
        init: function () {
        this.appendDummyInput()
            .appendField("Zet de snelheid van ")
            .appendField(new Blockly.FieldDropdown(instances), 'instance')
            .appendField(" naar ");
        this.appendValueInput("speed")
            .setCheck("Number")
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("%{BKY_ACTIONS_RGB}");
        this.setTooltip("kies een waarde tussen de -100 en de 100");
        this.setHelpUrl("");
        }
    };

    Blockly.Python['set_speed_motor_l9110s'] = function (block) {
        Blockly.Python.definitions_['import_zoef'] = 'from zoef_robot import robot\nmirte=robot.createRobot()';
        let instance = block.getFieldValue('instance');
        let speed = Blockly.Python.valueToCode(block, 'speed', Blockly.Python.ORDER_ATOMIC)
        return `mirte.setMotorSpeed('${instance}', ${speed})\n`;
    };

    Blockly.Blocks['stop_motor_l9110s'] = {
        init: function () {
        this.appendDummyInput()
            .appendField("Stop ")
            .appendField(new Blockly.FieldDropdown(instances), 'instance')
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("%{BKY_ACTIONS_RGB}");
        this.setTooltip("stopt de motor");
        this.setHelpUrl("");
        }
    };

    Blockly.Python['stop_motor_l9110s'] = function (block) {
        Blockly.Python.definitions_['import_zoef'] = 'from zoef_robot import robot\nmirte=robot.createRobot()';
        let instance = block.getFieldValue('instance');
        return `mirte.setMotorSpeed('${instance}', 0)\n`;
    };
}
