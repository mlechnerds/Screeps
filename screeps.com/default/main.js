var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var spawncode = require('spawncode');

// Test branch

module.exports.loop = function () {

    spawncode.run();

    for(var name in Game.creeps) {
        var creep = Game.creeps[name];
        if(creep.memory.role == 'harvester') {
            roleHarvester.run(creep);
        }
        if(creep.memory.role == 'upgrader') {
            roleUpgrader.run(creep);
        }
    }
}