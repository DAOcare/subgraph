import {
  DepositAdded,
  DepositWithdrawn,
  EmergencyStateReached,
  EmergencyVote,
  EmergencyWithdrawl,
  ProposalAdded,
  ProposalWithdrawn,
  RemoveEmergencyVote,
} from "../generated/PoolDeposits/PoolDeposits";
import { log } from "@graphprotocol/graph-ts";
import { Project } from "../generated/schema";

export function handleDepositAdded(event: DepositAdded): void {}

export function handleDepositWithdrawn(event: DepositWithdrawn): void {}

export function handleEmergencyStateReached(
  event: EmergencyStateReached
): void {}

export function handleEmergencyVote(event: EmergencyVote): void {}

export function handleEmergencyWithdrawl(event: EmergencyWithdrawl): void {}

export function handleProposalAdded(event: ProposalAdded): void {
  // Load Variables
  let projectId = event.params.proposalId.toI32();
  let benefactor = event.params.benefactor;
  // TODO: investigate this `toString`, didn't check what it does.
  const projectDataIdentifier = event.params.proposalIdentifier;

  // Perform logic and updates
  let newProject = new Project(projectId.toString());
  newProject.projectId = projectId;
  newProject.benefactor = benefactor;
  newProject.projectDataIdentifier = projectDataIdentifier;

  // Save results
  newProject.save();
}

export function handleProposalWithdrawn(event: ProposalWithdrawn): void {}

export function handleRemoveEmergencyVote(event: RemoveEmergencyVote): void {}

// https://gitter.im/kovan-testnet/faucet 0xd3Cbce59318B2E570883719c8165F9390A12BdD6
