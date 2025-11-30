var DataTypes = require("sequelize").DataTypes;
var __prisma_migrations = require("./_prisma_migrations");
var _air_moveset = require("./air_moveset");
var _attack = require("./attack");
var _character = require("./character");
var _character_stages = require("./character_stages");
var _ground_moveset = require("./ground_moveset");
var _out_of_shield_options = require("./out_of_shield_options");
var _player = require("./player");
var _smash_moveset = require("./smash_moveset");
var _special_moveset = require("./special_moveset");
var _stage = require("./stage");

function initModels(sequelize) {
  var _prisma_migrations = __prisma_migrations(sequelize, DataTypes);
  var air_moveset = _air_moveset(sequelize, DataTypes);
  var attack = _attack(sequelize, DataTypes);
  var character = _character(sequelize, DataTypes);
  var character_stages = _character_stages(sequelize, DataTypes);
  var ground_moveset = _ground_moveset(sequelize, DataTypes);
  var out_of_shield_options = _out_of_shield_options(sequelize, DataTypes);
  var player = _player(sequelize, DataTypes);
  var smash_moveset = _smash_moveset(sequelize, DataTypes);
  var special_moveset = _special_moveset(sequelize, DataTypes);
  var stage = _stage(sequelize, DataTypes);

  character.belongsTo(air_moveset, { as: "air_moveset", foreignKey: "air_moveset_id"});
  air_moveset.hasMany(character, { as: "characters", foreignKey: "air_moveset_id"});
  air_moveset.belongsTo(attack, { as: "back_attack", foreignKey: "back"});
  attack.hasMany(air_moveset, { as: "air_movesets", foreignKey: "back"});
  air_moveset.belongsTo(attack, { as: "down_attack", foreignKey: "down"});
  attack.hasMany(air_moveset, { as: "down_air_movesets", foreignKey: "down"});
  air_moveset.belongsTo(attack, { as: "forward_attack", foreignKey: "forward"});
  attack.hasMany(air_moveset, { as: "forward_air_movesets", foreignKey: "forward"});
  air_moveset.belongsTo(attack, { as: "neutral_attack", foreignKey: "neutral"});
  attack.hasMany(air_moveset, { as: "neutral_air_movesets", foreignKey: "neutral"});
  air_moveset.belongsTo(attack, { as: "up_attack", foreignKey: "up"});
  attack.hasMany(air_moveset, { as: "up_air_movesets", foreignKey: "up"});
  ground_moveset.belongsTo(attack, { as: "down_tilt_attack", foreignKey: "down_tilt"});
  attack.hasMany(ground_moveset, { as: "ground_movesets", foreignKey: "down_tilt"});
  ground_moveset.belongsTo(attack, { as: "forward_tilt_attack", foreignKey: "forward_tilt"});
  attack.hasMany(ground_moveset, { as: "forward_tilt_ground_movesets", foreignKey: "forward_tilt"});
  ground_moveset.belongsTo(attack, { as: "jab_attack", foreignKey: "jab"});
  attack.hasMany(ground_moveset, { as: "jab_ground_movesets", foreignKey: "jab"});
  ground_moveset.belongsTo(attack, { as: "up_tilt_attack", foreignKey: "up_tilt"});
  attack.hasMany(ground_moveset, { as: "up_tilt_ground_movesets", foreignKey: "up_tilt"});
  out_of_shield_options.belongsTo(attack, { as: "attack_attack", foreignKey: "attack"});
  attack.hasMany(out_of_shield_options, { as: "out_of_shield_options", foreignKey: "attack"});
  smash_moveset.belongsTo(attack, { as: "down_attack", foreignKey: "down"});
  attack.hasMany(smash_moveset, { as: "smash_movesets", foreignKey: "down"});
  smash_moveset.belongsTo(attack, { as: "forward_attack", foreignKey: "forward"});
  attack.hasMany(smash_moveset, { as: "forward_smash_movesets", foreignKey: "forward"});
  smash_moveset.belongsTo(attack, { as: "up_attack", foreignKey: "up"});
  attack.hasMany(smash_moveset, { as: "up_smash_movesets", foreignKey: "up"});
  special_moveset.belongsTo(attack, { as: "down_attack", foreignKey: "down"});
  attack.hasMany(special_moveset, { as: "special_movesets", foreignKey: "down"});
  special_moveset.belongsTo(attack, { as: "neutral_attack", foreignKey: "neutral"});
  attack.hasMany(special_moveset, { as: "neutral_special_movesets", foreignKey: "neutral"});
  special_moveset.belongsTo(attack, { as: "side_attack", foreignKey: "side"});
  attack.hasMany(special_moveset, { as: "side_special_movesets", foreignKey: "side"});
  special_moveset.belongsTo(attack, { as: "up_attack", foreignKey: "up"});
  attack.hasMany(special_moveset, { as: "up_special_movesets", foreignKey: "up"});
  player.belongsTo(character, { as: "main", foreignKey: "main_id"});
  character.hasMany(player, { as: "players", foreignKey: "main_id"});
  player.belongsTo(character, { as: "secondary", foreignKey: "secondary_id"});
  character.hasMany(player, { as: "secondary_players", foreignKey: "secondary_id"});
  character.belongsTo(character_stages, { as: "stages_character_stage", foreignKey: "stages"});
  character_stages.hasMany(character, { as: "characters", foreignKey: "stages"});
  character.belongsTo(ground_moveset, { as: "ground_moveset", foreignKey: "ground_moveset_id"});
  ground_moveset.hasMany(character, { as: "characters", foreignKey: "ground_moveset_id"});
  character.belongsTo(out_of_shield_options, { as: "out_of_shields_out_of_shield_option", foreignKey: "out_of_shields"});
  out_of_shield_options.hasMany(character, { as: "characters", foreignKey: "out_of_shields"});
  character.belongsTo(smash_moveset, { as: "smash_moveset", foreignKey: "smash_moveset_id"});
  smash_moveset.hasMany(character, { as: "characters", foreignKey: "smash_moveset_id"});
  character.belongsTo(special_moveset, { as: "special_moveset", foreignKey: "special_moveset_id"});
  special_moveset.hasMany(character, { as: "characters", foreignKey: "special_moveset_id"});
  character_stages.belongsTo(stage, { as: "stage_stage", foreignKey: "stage"});
  stage.hasMany(character_stages, { as: "character_stages", foreignKey: "stage"});

  return {
    _prisma_migrations,
    air_moveset,
    attack,
    character,
    character_stages,
    ground_moveset,
    out_of_shield_options,
    player,
    smash_moveset,
    special_moveset,
    stage,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
