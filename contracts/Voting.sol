pragma solidity ^0.4.18;
// We have to specify what version of compiler this code will compile with

contract Voting {
  /* mapping field below is equivalent to an associative array or hash.
  The key of the mapping is candidate name stored as type bytes32 and value is
  an unsigned integer to store the vote count
  */

  bytes32[] private validCandidates;
  mapping (bytes32 => uint8) private votesForCandidate;

  /* This is the constructor which will be called once when you
  deploy the contract to the blockchain. When we deploy the contract,
  we will pass an array of candidates who will be contesting in the election
  */
  function Voting(bytes32[] candidateList) public {
    for (uint8 i = 0; i < candidateList.length; i++) {
      votesForCandidate[candidateList[i]] = 1;
    }
    validCandidates = candidateList;
  }

  // This function returns the total votes a candidate has received so far
  function totalVotesFor(bytes32 candidateName) view public returns (uint8) {
    return votesForCandidate[candidateName];
  }

  // This function increments the vote count for the specified candidate. This
  // is equivalent to casting a vote
  function voteForCandidate(bytes32 candidateName) public onlyForValidCandidate(candidateName) {
    votesForCandidate[candidateName] += 1;
  }

  function isValidCandidate(bytes32 candidateName) view private returns (bool)  {
    return votesForCandidate[candidateName] != 0;
  }

  function getValidCandidates() view public returns (bytes32[]) {
    return validCandidates;
  }

  modifier onlyForValidCandidate(bytes32 candidateName) {
    require(isValidCandidate(candidateName));
    _;
  }
}
