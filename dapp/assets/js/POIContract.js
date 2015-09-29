var POIContract = {
	address: '',
	ABI: [{"constant":false,"inputs":[],"name":"register","outputs":[{"name":"groupNum","type":"uint256"}],"type":"function"},{"constant":true,"inputs":[],"name":"assignmentWindowInBlocks","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":true,"inputs":[],"name":"roundLengthInBlocks","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":true,"inputs":[],"name":"genesisBlock","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":true,"inputs":[],"name":"numRegisteredUsers","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":true,"inputs":[],"name":"numGroups","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"groups","outputs":[{"name":"numUsers","type":"uint256"}],"type":"function"},{"constant":true,"inputs":[],"name":"registrationTimeInBlocks","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"users","outputs":[{"name":"groupNumber","type":"uint256"},{"name":"validations","type":"uint256"},{"name":"registered","type":"bool"}],"type":"function"},{"constant":true,"inputs":[],"name":"validationWindowInBlocks","outputs":[{"name":"","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[],"name":"assignGroup","outputs":[{"name":"groupNum","type":"uint256"}],"type":"function"},{"constant":false,"inputs":[],"name":"verify","outputs":[{"name":"success","type":"bool"}],"type":"function"},{"inputs":[],"type":"constructor"}],
	bytecode: '60606040526001600355436005556301c9c380600655612710600755611388600855610bb86009556102f8806100366000396000f300606060405236156100985760e060020a60003504631aa3a008811461009a578063208d2792146101035780634b5466201461010c5780634cdc9c631461011557806366f254961461011e57806383324e8c1461012757806396324bd414610130578063a31417b314610148578063a87430ba14610151578063befa3bca1461017b578063f5b64f5f14610184578063fc735e9914610283575b005b6102dd60075460055460009101431080156100ce5750600160a060020a03331681526001602052604081206002015460ff16155b1561028057600160a060020a03331681526001602081905260408220600201805460ff19168217905560048054909101905590565b6102dd60085481565b6102dd60065481565b6102dd60055481565b6102dd60045481565b6102dd60035481565b6102dd60043560006020819052908152604090205481565b6102dd60075481565b6102e760043560016020819052600091825260409091208054600282015491909201549060ff1683565b6102dd60095481565b6102dd60075460055460009101431180156101a85750600854600754600554010143105b80156101cc5750600160a060020a03331681526001602052604081206002015460ff165b80156101ec575060408120600160a060020a033316825260016020525481145b156102805760035481526020819052604081205460051415610212576003805460010190555b6003600050546001600050600033600160a060020a031681526020019081526020016000206000506000016000508190555060006000506000600360005054815260200190815260200160002060005060000160008181505480929190600101919050555060036000505490505b90565b6102dd600854600754600554600092910101431180156102b3575060085460075460055460095491019091010143105b80156102d45750600160a060020a0333168152600160205260408120548114155b15610280575b90565b6060908152602090f35b606092835260809190915260a05280f3'
}