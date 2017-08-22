var spawncode = {
    
    run: function(){ 

        for(var name in Memory.creeps) {
            if(!Game.creeps[name]) {
                delete Memory.creeps[name];
                //console.log('Clearing non-existing creep memory:', name);
            }
        }
        
        if(Game.spawns['Voltron_Spawn'].spawning) { 
            var spawningCreep = Game.creeps[Game.spawns['Voltron_Spawn'].spawning.name];
            Game.spawns['Voltron_Spawn'].room.visual.text(
                '🛠️' + spawningCreep.memory.role,
                Game.spawns['Voltron_Spawn'].pos.x + 1, 
                Game.spawns['Voltron_Spawn'].pos.y, 
                {align: 'left', opacity: 0.8});
        }

        var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
        //console.log('Harvesters: ' + harvesters.length);

        if(harvesters.length < 3) {
            var newName = Game.spawns['Voltron_Spawn'].createCreep([WORK,CARRY,MOVE], undefined, {role: 'harvester'});
            //console.log('Spawning new harvester: ' + newName);
        }2

        var upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader')
       // console.log('Upgraders: ' + upgraders.length);

        if(upgraders.length < 3){
            var newName = Game.spawns['Voltron_Spawn'].createCreep([WORK,CARRY,MOVE], undefined, {role: 'upgrader'});
            //console.log('Spawning new upgrader: ' + newName);

        }

        var builders = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder')
        // console.log('Builders: ' + builders.length);
 
         if(builders.length < 3){
             var newName = Game.spawns['Voltron_Spawn'].createCreep([WORK,CARRY,MOVE], undefined, {role: 'builder'});
             //console.log('Spawning new builder: ' + newName);
 
         }
        
    }  
};
    
module.exports = spawncode;