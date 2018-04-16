function FloorObject(){

  this.show = function(x,y, width, height){

    var floorGeometry = new THREE.PlaneGeometry(x, y, width, height)

    var floorMaterial = new THREE.MeshPhongMaterial( {
      color:0x298A08,
      map:crateTexture,
      bumpMap:crateBumpMap,
      normalMap:crateNormalMap
    });

    meshFloor = new THREE.Mesh(floorGeometry, floorMaterial);
    meshFloor.rotation.x -= Math.PI / 2;
    meshFloor.receiveShadow = true;
    
    scene.add(meshFloor);
  }

  function floorTextures(map, bumpMap, normalMap){
  	var textureLoader = new THREE.TextureLoader();
  	crateTexture = textureLoader.load(map);
  	crateBumpMap = textureLoader.load(bumpMap);
  	crateNormalMap = textureLoader.load(normalMap);
  }

}
