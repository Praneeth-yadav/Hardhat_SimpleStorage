// SPDX-License-Identifier: MIT
// to make licensing and sharing code more easier
pragma solidity ^0.8.8; // compulsory ti give version to be used and end with ;

// pragma solidity ^0.8.8; the ^ caret symmbol signifies that we atleast want to use 0.8.8 and we can choose other
//versions to perform compilation

contract SimpleStorage {
    //contract is a key word in solidity and it tells the compiler that the next section is a contract
    //types: boolan/int/uint/string/bytes
    /*
bool x=true;
int256 a=10;//256 specifies the no of bits even if we dont specify then its 256
uint64 favnum=123;//lowest is 8bits so uint8 is least
string favstr="cat";
bytes32 favbytes="cats";//maxium size of bytes we can specify is 32, difference between string and bytes is bytes converts its assigned string into bytes objexts such as "0xsd......" random letters and numbers
address myaddress=
*/
    uint256 public favnumber; // un initialized is set to 0 so same as uint256 favnumber=0;

    struct People {
        uint256 favouritenum;
        string personname;
    }
    People[] public people;

    mapping(string => uint256) public namefavnumber;

    function allocate(uint256 _favnumber) public virtual {
        // we add virtual key word in order to allow overriding
        favnumber = _favnumber;
    }

    //calldata,memory,storage  - need to be specified to temporary variable
    //if we use callback we cannot change the variable _personname
    //memeory if used we can change the value of variable _person

    //calldata and memeory -data is temp and  only exist for duration of function
    function assign(uint256 _favouritenum, string memory _personname) public {
        people.push(People(_favouritenum, _personname));
        namefavnumber[_personname] = _favouritenum;
    }

    //view, pure -
    // 'view' can be used to view the data i.e reading the data but will not allow to perform any computation
    //'view' function i.e transactio will not charge us any gas fee
    //'pure' if used will not charge any gas value but it will also not allow us to read
    function review() public view returns (uint256) {
        return favnumber;
    }
}
