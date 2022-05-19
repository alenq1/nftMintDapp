import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '../../Button';
import Switch from '@mui/material/Switch';
import Typography from '@mui/material/Typography';
import {StyledAdminForm, FormFields} from '../style'
// import { useEffect, useCallback, useState } from "react";



const  AdminForm = (props: any) => {


    const {
        // data,
        contractDetails,
        // account,
        fields,
        handleChange,
        handleSwitch,
        send,
        setMaxQuantity,
        withdraw        
    } = props

    // console.log("ADMIN FOOOOOOOOOORRRRRRRRRRMMMMMMMMMM CONTRACT DETAILS", contractDetails)

    const {
        uri, 
        state, 
        isPaused, 
        maxSupply, 
        burnEnabled, 
        maxMintPerWalletWhite, 
        maxMintPerWalletPublic, 
        mintPricePublic, 
        mintPriceWhitelist
    } = contractDetails

    // console.log("CONTRACT DETAILS", contractDetails)

    const uriAction = contractDetails.stage === 0 ? "setBaseUri" : "revealURI"

    // console.log(
    //     "%cESTE ES ESTADO ",
    //     "background: green; color: white; display: block;", contractDetails.stage
    //   );
  return (
    <Box component="form" 
        sx={StyledAdminForm}
        noValidate
        autoComplete="off"
    >
        <Box sx={FormFields}>
            <TextField
                disabled={contractDetails.stage !== 0 || isPaused} 
                id="maxSupply"
                name="maxSupply"
                label="maxSupply"
                inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                value={fields.maxSupply}
                onChange={handleChange}
            />
            <Button text={"send"} 
                    action={() =>send (fields.maxSupply, Object.keys(fields)[0])}
                    disabled={contractDetails.stage !== 0 || isPaused}    
            />
        </Box>
                
        <Box sx={FormFields}>
            <TextField
                disabled={contractDetails.stage !== 0 || isPaused} 
                id="maxMintPerWalletWhite"
                name="maxMintPerWalletWhite"
                label="maxMintPerWalletWhite"
                inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                value={fields.maxMintPerWalletWhite}
                onChange={handleChange}
            />
            <TextField
                disabled={contractDetails.stage !== 0 || isPaused} 
                id="maxMintPerWalletPublic"
                name="maxMintPerWalletPublic"
                label="maxMintPerWalletPublic"
                inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                value={fields.maxMintPerWalletPublic}
                onChange={handleChange}
            />
            <Button text={"send"} 
                action={() =>setMaxQuantity (
                    [fields.maxMintPerWalletWhite, fields.maxMintPerWalletPublic ], 'setMaxMintPerWallet'
                )}
                disabled={contractDetails.stage !== 0 || isPaused}                
            />
        </Box>

        <Box sx={FormFields}>
            <TextField
                disabled={contractDetails.stage !== 0 || isPaused} 
                id="mintPriceWhite"
                name="mintPriceWhite"
                label="mintPriceWhite"
                inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                value={fields.mintPriceWhite}
                onChange={handleChange}
            />
            <TextField
                disabled={contractDetails.stage !== 0 || isPaused} 
                id="mintPricePublic"
                name="mintPricePublic"
                label="mintPricePublic"
                inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                value={fields.mintPricePublic}
                onChange={handleChange}
            />
            <Button text={"send"} action={() =>setMaxQuantity ([fields.mintPriceWhite, fields.mintPricePublic], 'setMintPrices')}
        disabled={contractDetails.stage !== 0 || isPaused}    
/>
        </Box>
        <Box sx={FormFields}>
            <TextField
                disabled={(contractDetails.stage !== 0 && contractDetails.stage !== 3) || isPaused} 
                id={uriAction}
                name={uriAction}
                label={uriAction}
                value={contractDetails.stage === 0 ? fields.setBaseUri : fields.revealURI}
                onChange={handleChange}
            />
            <Button text={"send"} action={() =>send (fields[uriAction], uriAction)}
        disabled={(contractDetails.stage !== 0 && contractDetails.stage !== 3) || isPaused}    
/>
        </Box>
        <Box sx={FormFields}>
            <TextField
                disabled={contractDetails.stage !== 0 || isPaused} 
                multiline
                id="addAddressToWhitelist"
                name="addAddressToWhitelist"
                label="Add address to Whitelist"
                value={fields.addAddressToWhitelist}
                onChange={handleChange}
            />
            <Button text={"send"} action={() =>send (fields.addAddressToWhitelist, Object.keys(fields)[6])}
        disabled={contractDetails.stage !== 0 || isPaused}    
/>
        </Box>      
        <Box sx={FormFields}>
            <TextField
                disabled={contractDetails.stage !== 0 || isPaused} 
                id="removeAddressFromWhitelist"
                name="removeAddressFromWhitelist"
                label="Remove address from Whitelist"
                value={fields.removeAddressFromWhitelist}
                onChange={handleChange}
            />
            <Button text={"send"} action={() =>send (fields.removeAddressFromWhitelist, Object.keys(fields)[7])}
        disabled={contractDetails.stage !== 0 || isPaused}    
/>
        </Box>        
        <Box sx={FormFields}>
            <Typography variant="subtitle1" gutterBottom component="div">
                enable Burn
            </Typography>
            <Switch checked={!!contractDetails.burnEnabled}
                    name="enableBurn"
                    onChange={handleSwitch}
                    defaultChecked={contractDetails.burnEnabled}
                    // inputProps={{ 'aria-label': 'controlled' }}
            />
        </Box>
        <Box sx={FormFields}>
            <Typography variant="subtitle1" gutterBottom component="div">
                Pause Contract
                </Typography>
                <Switch checked={!!contractDetails.isPaused}
                    name="setPause"
                    onChange={handleSwitch}
                    defaultChecked={contractDetails.isPaused}
                    // inputProps={{ 'aria-label': 'controlled' }}
                />
        </Box>
        <Button text={"Withdraw"} action={() =>withdraw()}
                disabled={contractDetails.stage !== 4 || isPaused}    
        />        
    </Box>
  );
}

export default AdminForm