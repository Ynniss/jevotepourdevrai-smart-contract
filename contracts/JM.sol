pragma solidity ^0.8.13;

contract JM {

    bytes32 name;
    uint admin;
    bool public isOpen;

    struct Candidat {
        bytes32 name;
        uint[] mentions;
    }
    Candidat[] public candidates;
    //uint[] emptyMentions;

    constructor(bytes32 _name, uint _admin) {
        name = _name;
        admin = _admin;

        //isOpen = false;
/*
        for(uint i=0;i<7;i++) {
            emptyMentions.push(0);
        }
*/
    }

    function getCandidates() public view returns(Candidat[] memory) {
      return candidates;
    }

    function present(bytes32 _name) public {
      if (!isOpen) {
        Candidat memory newCandidate;
	newCandidate.name = _name;
	newCandidate.mentions = new uint[](7);

          candidates.push(newCandidate);
       }
    }

    function vote(uint[] memory _mentions) public {
        if (isOpen && _mentions.length == candidates.length) {
            for(uint i=0;i<candidates.length;i++) {
                candidates[i].mentions[_mentions[i]] ++;
            }
        } else if (!isOpen) {
        } else if (_mentions.length < candidates.length) {
        } else {
        }
    }

    function openElection() public {
        //TODO check admin and election is not open yet
        isOpen = true;
    }

    function closeElection() public {
        //TODO check admin and election is open
        isOpen = false;
    }

    function results() public {
        for(uint c=0;c<candidates.length;c++) {
            for (uint m=0;m<7;m++) {
            }
        }
    }
}
