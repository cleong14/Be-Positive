BloodType = {
  
  AB_POS : "AB_POS",
  AB_NEG : "AB_NEG",
  A_POS  : "A_POS",
  A_NEG  : "A_NEG",
  B_POS  : "B_POS",
  B_NEG  : "B_NEG",
  O_POS  : "O_POS",
  O_NEG  : "O_NEG"

};

BloodTransfusionRules = {
  
  /**
   * Set the simulation speed.
   * @type {Number} : Valid values between 1 and 200
   */
  simulation_speed : 200,

  /**
   * returns BloodType, or false to give no BloodType
   * 
   * @name receive_patient
   * @param {Bank} blood_inventory
   * @param {Patient} patient
   * @returns {BloodType or false}
   *
   * Patient properties {
   *   gender : String, (MALE,FEMALE)
   *   blood_type : String (BloodType)
   * }
   * 
   * Bank properties {
   *   AB_POS : Integer,
   *   AB_NEG : Integer,
   *   A_POS  : Integer,
   *   A_NEG  : Integer,
   *   B_POS  : Integer,
   *   B_NEG  : Integer,
   *   O_POS  : Integer,
   *   O_NEG  : Integer
   * }
   * 
   */

  receive_patient : function (blood_inventory, patient) {
    
    // give a random blood type to anyone
    // very bad idea!

    // AB_POS blood type patient
    if(patient.blood_type === 'AB_POS') {

      // blood type arr
      var AB_POS_usableBlood = ["AB_POS", "AB_NEG", "A_POS", "A_NEG", "B_POS", "B_NEG", "O_POS", "O_NEG"];

      // null is the blood type name[0] and 0 is the value(count)[1]
      var AB_POS_highestCount = [null, 0];

      // iterate over usable blood types
      for(var i = 0; i < AB_POS_usableBlood.length; i++) {
        
        // checking current blood to see if its greater than the current highest blod count
        if(blood_inventory[AB_POS_usableBlood[i]] > AB_POS_highestCount[1]) {
          // reassigning highest blood type name
          AB_POS_highestCount[0] = AB_POS_usableBlood[i];
          // reassigning highest blood count
          AB_POS_highestCount[1] = blood_inventory[AB_POS_usableBlood[i]]; //blood_invetory.AB_POS **SAME SAME... but different...
        }
      }

      // if the name is not null, so there is a usable blood type the return that blood type
      if (AB_POS_highestCount[0]) {
        return AB_POS_highestCount[0];
      }
    }

    // AB_NEG blood type patient
    if(patient.blood_type === 'AB_NEG') {

      var AB_NEG_usableBlood = ["AB_NEG", "A_NEG", "B_NEG", "O_NEG"];
      var AB_NEG_highestCount = [null, 0];

      for(var j = 0; j < AB_NEG_usableBlood.length; j++) {
        if (blood_inventory[AB_NEG_usableBlood[j]] > AB_NEG_highestCount[1]) {
          AB_NEG_highestCount[0] = AB_NEG_usableBlood[j];
          AB_NEG_highestCount[1] = blood_inventory[AB_NEG_usableBlood[j]];
        }
      }

      if (AB_NEG_highestCount[0]) {
        return AB_NEG_highestCount[0];
      }
    }

    // A_POS blood type patient
    if(patient.blood_type === 'A_POS') {

      var A_POS_usableBlood = ["A_POS", "A_NEG", "O_POS", "O_NEG"];
      var A_POS_highestCount = [null, 0];

      for (var k = 0; k < A_POS_usableBlood.length; k++) {
        if (blood_inventory[A_POS_usableBlood[k]] > A_POS_highestCount[1]) {
          A_POS_highestCount[0] = A_POS_usableBlood[k];
          A_POS_highestCount[1] = blood_inventory[A_POS_usableBlood[k]];
        }
      }

      if (A_POS_highestCount[0]) {
        return A_POS_highestCount[0];
      }
    }

    // A_NEG blood type patient
    if(patient.blood_type === 'A_NEG') {

      var A_NEG_usableBlood = ["A_NEG", "O_NEG"];
      var A_NEG_highestCount = [null, 0];

      for(var p = 0; p < A_NEG_usableBlood.length; p++) {
        if (blood_inventory[A_NEG_usableBlood[p]] > A_NEG_highestCount[1]) {
          A_NEG_highestCount[0] = A_NEG_usableBlood[p];
          A_NEG_highestCount[1] = blood_inventory[A_NEG_usableBlood[p]];
        }
      }

      if (A_NEG_highestCount[0]) {
        return A_NEG_highestCount[0];
      }
    }

    // B_POS blood type patient
    if(patient.blood_type === 'B_POS') {

      var B_POS_usableBlood = ["B_POS", "B_NEG", "O_POS", "O_NEG"];
      var B_POS_highestCount = [null, 0];

      for (var h = 0; h < B_POS_usableBlood.length; h++) {
        if (blood_inventory[B_POS_usableBlood[h]] > B_POS_highestCount[1]) {
          B_POS_highestCount[0] = B_POS_usableBlood[h];
          B_POS_highestCount[1] = blood_inventory[B_POS_usableBlood[h]];
        }
      }

      if (B_POS_highestCount[0]) {
        return B_POS_highestCount[0];
      }
    }

    // B_NEG blood type patient
    if(patient.blood_type === 'B_NEG') {

      var B_NEG_usableBlood = ["B_NEG", "O_NEG"];
      var B_NEG_highestCount = [null, 0];

      for (var g = 0; g < B_NEG_usableBlood.length; g++) {
        if (blood_inventory[B_NEG_usableBlood[g]] > B_NEG_highestCount[1]) {
          B_NEG_highestCount[0] = B_NEG_usableBlood[g];
          B_NEG_highestCount[1] = blood_inventory[B_NEG_usableBlood[g]];
        }
      }

      if (B_NEG_highestCount[0]) {
        return B_NEG_highestCount[0];
      }
    }

    // O_POS blood type patient
    if(patient.blood_type === 'O_POS') {

      var O_POS_usableBlood = ["O_POS", "O_NEG"];
      var O_POS_highestCount = [null, 0];

      for (var f = 0; f < O_POS_usableBlood.length; f++) {
        if (blood_inventory[O_POS_usableBlood[f]] > O_POS_highestCount[1]) {
          O_POS_highestCount[0] = O_POS_usableBlood[f];
          O_POS_highestCount[1] = blood_inventory[O_POS_usableBlood[f]];
        }
      }

      if (O_POS_highestCount[0]) {
        return O_POS_highestCount[0];
      }
    }

    // O_NEG blood type patient
    if(patient.blood_type === 'O_NEG') {
      if(blood_inventory.O_NEG > 0) {
        return patient.blood_type;
      }
    }

    console.log(patient, blood_inventory);
    return false; 
  }

};