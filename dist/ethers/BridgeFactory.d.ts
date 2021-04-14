import { ContractFactory, Signer } from "ethers";
import { Provider } from "ethers/providers";
import { UnsignedTransaction } from "ethers/utils/transaction";
import { BigNumberish } from "ethers/utils";
import { Bridge } from "./Bridge";
import { TransactionOverrides } from "./types";
export declare class BridgeFactory extends ContractFactory {
    constructor(signer?: Signer);
    deploy(chainID: BigNumberish, initialRelayers: string[], initialRelayerThreshold: BigNumberish, fee: BigNumberish, expiry: BigNumberish, overrides?: TransactionOverrides): Promise<Bridge>;
    getDeployTransaction(chainID: BigNumberish, initialRelayers: string[], initialRelayerThreshold: BigNumberish, fee: BigNumberish, expiry: BigNumberish, overrides?: TransactionOverrides): UnsignedTransaction;
    attach(address: string): Bridge;
    connect(signer: Signer): BridgeFactory;
    static connect(address: string, signerOrProvider: Signer | Provider): Bridge;
}
