pragma solidity ^0.6.0;

import "@openzeppelin/contracts/presets/ERC20PresetMinterPauser.sol";

/**
 * @dev {ERC20} token, including:
 *
 *  - ability for holders to burn (destroy) their tokens
 *  - a minter role that allows for token minting (creation)
 *  - a pauser role that allows to stop all token transfers
 *
 * This contract uses {AccessControl} to lock permissioned functions using the
 * different roles - head to its documentation for details.
 *
 * The account that deploys the contract will be granted the minter and pauser
 * roles, as well as the default admin role, which will let it grant both minter
 * and pauser roles to another accounts
 */
contract ERC20MinterBurnerPauser is ERC20PresetMinterPauser {
    constructor(
        string memory name,
        string memory symbol,
        uint8 decimals
    ) public ERC20PresetMinterPauser(name, symbol) {
        _setupDecimals(decimals);
    }
}
