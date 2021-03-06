const Enum = require('../enum');
module.exports = new Enum({
  '1': 'InitializeSessionKeyPt1',
  '2': 'InitializeSessionKeyPt2',
  '3': 'InitializeSessionKey',
  '4': 'InitializedSession',
  '5': 'Disconnect',
  '6': 'Disconnected',
  '7': 'RemoveBlacklistDevice',
  '8': 'RemovedBlacklistDevice',
  '9': 'QueryBlacklistDevice',
  '10': 'BlacklistDeviceQueryResults',
  '11': 'SetBlacklistMode',
  '12': 'HasSetBlacklistMode',
  '13': 'GetConnectionEventRate',
  '14': 'ResponseGetConnectionEventRate',
  '15': 'SetLocalName',
  '16': 'HasSetLocalName',
  '17': 'StageLowerHalfOfOfflineKey',
  '18': 'StagedLowerHalfOfOfflineKey',
  '19': 'StageUpperHalfOfOfflineKey',
  '20': 'StagedUpperHalfOfOfflineKey',
  '21': 'CommitOfflineKey',
  '22': 'CommittedOfflineKey',
  '23': 'ClearOffline',
  '24': 'ClearedOfflineKey',
  // gap
  '33': 'SetAdvRate',
  '34': 'HasSetAdvRate',
  '35': 'GetAdvRate',
  '36': 'ResponseGetAdvRate',
  '37': 'SetConnectionRate',
  '38': 'HasSetConnectionRate',
  '39': 'GetConnectionRate',
  '40': 'ResponseGetConnectionRate',
  '41': 'SetTimeout',
  '42': 'HasSetTimeout',
  '43': 'GetTimeout',
  '44': 'ResponseGetTimeout',
  '45': 'SetDefaultConnectionRate',
  '46': 'HasSetDefaultConnectionRate',
  '47': 'SetRfPower',
  '48': 'HasSetRfPower',
  '49': 'ReadI2CRegister',
  '50': 'ResponseReadI2CRegister',
  '51': 'BleLogInfo',
  '52': 'ResponseBleLogInfo',
  '53': 'RequestI2CSleep',
  '54': 'ResponseI2CSleep',
  '55': 'RequestI2COn',
  '56': 'ResponseI2COn',
  '57': 'FlushI2CFifo',
  '58': 'ResponeFlushI2CFifo',
  '59': 'RefreshI2CRegister',
  '60': 'ResponeRefreshI2CRegister',
  // gap
  '65': 'GetFlashPageData',
  '66': 'ResponseGetFlashPageData',
  '67': 'GetWdctrlReset',
  '68': 'ResponseGetWdctrlReset',
  '69': 'StopWatchdogReset',
  '70': 'ResponseStopWatchdogReset',
  '71': 'NvTableLowerRead',
  '72': 'ResponseNvTableLowerRead',
  '73': 'NvTableUpperRead',
  '74': 'ResponseNvTableUpperRead',
  '75': 'NvTableChecksumRead',
  '76': 'ResponseNvTableChecksumRead',
  // gap
  '81': 'InitiatePairing', // Not sure how this is suppose to be used
  '82': 'InitiatedPairing',
  '83': 'GetBondCount',
  '84': 'ResponseGetBondCount',
  '85': 'EraseAllBonds',
  '86': 'ResponseEraseAllBonds',
  '87': 'StageLowerHalfOfSerialNumber',
  '88': 'StagedLowerHalfOfSerialNumber',
  '89': 'StageUpperHalfOfSerialNumber',
  '90': 'StagedUpperHalfOfSerialNumber',
  '91': 'CommitSerialNumber',
  '92': 'CommitedSerialNumber',
  '93': 'GetSerialNumberLow',
  '94': 'ResponseGetSerialNumberLow',
  '95': 'GetSerialNumberHigh',
  '96': 'ResponseGetSerialNumberHigh',
  '97': 'SetUuidLow',
  '98': 'ResponseSetUuidLow',
  '99': 'SetUuidHigh',
  '100': 'ResponseSetUuidHigh',
  '101': 'CommitUuid',
  '102': 'ResponsCommitUuid',
  '103': 'GetUuidLow',
  '104': 'ResponseGetUuidLow',
  '105': 'GetUuidHigh',
  '106': 'ResponseGetUuidHigh',
  '107': 'ConfirmSerialNumber',
  '108': 'ResponseConfirmSerialNumber',
  '109': 'ConfirmUuid',
  '110': 'ResponseConfirmUuid',
  // gap
  '129': 'ErrorCommandChecksum',
  '130': 'ErrorUnknownCommand',
  '131': 'ErrorHkChecksum',
  '132': 'ErrorHkFlash',
  '133': 'ErrorAdvRateRange',
  '134': 'ErrorAdvRateFlash',
  '135': 'ErrorConnectRateRange',
  '136': 'ErrorTimeoutRange',
  '137': 'ErrorTimeoutFlash',
  '138': 'ErrorFlashPageRange',
  '139': 'ErrorWrongKeyNumber',
  '140': 'ErrorNotAuthorized',
  '141': 'ErrorBlacklistDeviceNotFound',
  '142': 'ErrorSetRfPowerRange',
  '143': 'ErrorSetRfPowerHighHci',
  '144': 'ErrorInvalidConnectionHandle',
  '145': 'ErrorNvTableReadRange',
  '146': 'ErrorNvTableReadFlash',
  '147': 'ErrorBlacklistUnsupported',
  '148': 'ErrorSerialNumberChecksum',
  '149': 'ErrorSerialNumberFlash',
  '150': 'ErrorCommitSerialNumberNotBlank',
  '151': 'ErrorUuidChecksum',
  '152': 'ErrorUuidFlash',
  '153': 'ErrorCommitUuidNotBlank',
  '154': 'ErrorConfirmUuid',
  '155': 'ErrorConfirmSerialNumber',
  '240': 'ErrorKeyUndefined',
  '241': 'ErrorKeyFailure',
  '242': 'ErrorBlacklistedDevice'
});
