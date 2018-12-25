import Web3 from 'web3'
// 合约addr
// let contractAddr = '0xd52a7d0d30584d759a6571da569c3776c7d73acc' // ceshi3

// let contractAddr = '0xc9262cf88ffb919dc365b79b99ea9fe23b8e3a0b' // online
// let contractAddr = '0x9c4118584552d6144223a7f65b2c6ebb76b792e9' // online2  2h
let contractAddr = '0x2119a3314c1d40704d816392a9e44da463688992' // online2 new

let web3 = window.web3
let contractAbi = [{
        'anonymous': false,
        'inputs': [{
            'indexed': false,
            'name': 'rid',
            'type': 'uint256'
        }],
        'name': 'onActivate',
        'type': 'event'
    },
    {
        'constant': false,
        'inputs': [],
        'name': 'activate',
        'outputs': [],
        'payable': true,
        'stateMutability': 'payable',
        'type': 'function'
    },
    {
        'constant': false,
        'inputs': [{
                'name': '_tickets',
                'type': 'uint256'
            },
            {
                'name': '_affCode',
                'type': 'address'
            }
        ],
        'name': 'buyXaddr',
        'outputs': [],
        'payable': true,
        'stateMutability': 'payable',
        'type': 'function'
    },
    {
        'constant': false,
        'inputs': [{
                'name': '_tickets',
                'type': 'uint256'
            },
            {
                'name': '_affCode',
                'type': 'uint256'
            }
        ],
        'name': 'buyXid',
        'outputs': [],
        'payable': true,
        'stateMutability': 'payable',
        'type': 'function'
    },
    {
        'constant': false,
        'inputs': [{
                'name': '_tickets',
                'type': 'uint256'
            },
            {
                'name': '_affCode',
                'type': 'bytes32'
            }
        ],
        'name': 'buyXname',
        'outputs': [],
        'payable': true,
        'stateMutability': 'payable',
        'type': 'function'
    },
    {
        'constant': false,
        'inputs': [{
                'name': '_pID',
                'type': 'uint256'
            },
            {
                'name': '_addr',
                'type': 'address'
            },
            {
                'name': '_name',
                'type': 'bytes32'
            },
            {
                'name': '_laff',
                'type': 'uint256'
            }
        ],
        'name': 'receivePlayerInfo',
        'outputs': [],
        'payable': false,
        'stateMutability': 'nonpayable',
        'type': 'function'
    },
    {
        'anonymous': false,
        'inputs': [{
                'indexed': false,
                'name': 'playerAddress',
                'type': 'address'
            },
            {
                'indexed': false,
                'name': 'begin',
                'type': 'uint256'
            },
            {
                'indexed': false,
                'name': 'end',
                'type': 'uint256'
            },
            {
                'indexed': false,
                'name': 'round',
                'type': 'uint256'
            },
            {
                'indexed': false,
                'name': 'playerName',
                'type': 'bytes32'
            }
        ],
        'name': 'onBuy',
        'type': 'event'
    },
    {
        'anonymous': false,
        'inputs': [{
                'indexed': true,
                'name': 'playerID',
                'type': 'uint256'
            },
            {
                'indexed': true,
                'name': 'playerAddress',
                'type': 'address'
            },
            {
                'indexed': true,
                'name': 'playerName',
                'type': 'bytes32'
            },
            {
                'indexed': false,
                'name': 'isNewPlayer',
                'type': 'bool'
            },
            {
                'indexed': false,
                'name': 'affiliateID',
                'type': 'uint256'
            },
            {
                'indexed': false,
                'name': 'affiliateAddress',
                'type': 'address'
            },
            {
                'indexed': false,
                'name': 'affiliateName',
                'type': 'bytes32'
            },
            {
                'indexed': false,
                'name': 'amountPaid',
                'type': 'uint256'
            },
            {
                'indexed': false,
                'name': 'timeStamp',
                'type': 'uint256'
            }
        ],
        'name': 'onNewName',
        'type': 'event'
    },
    {
        'anonymous': false,
        'inputs': [{
                'indexed': false,
                'name': 'addr',
                'type': 'address'
            },
            {
                'indexed': false,
                'name': 'begin',
                'type': 'uint256'
            },
            {
                'indexed': false,
                'name': 'end',
                'type': 'uint256'
            }
        ],
        'name': 'LogbuyNums',
        'type': 'event'
    },
    {
        'anonymous': false,
        'inputs': [{
                'indexed': false,
                'name': 'rid',
                'type': 'uint256'
            },
            {
                'indexed': false,
                'name': 'ticketsout',
                'type': 'uint256'
            },
            {
                'indexed': false,
                'name': 'winner',
                'type': 'address'
            },
            {
                'indexed': false,
                'name': 'luckynum',
                'type': 'uint256'
            },
            {
                'indexed': false,
                'name': 'jackpot',
                'type': 'uint256'
            }
        ],
        'name': 'onSettle',
        'type': 'event'
    },
    {
        'constant': false,
        'inputs': [{
                'name': '_pID',
                'type': 'uint256'
            },
            {
                'name': '_name',
                'type': 'bytes32'
            }
        ],
        'name': 'receivePlayerNameList',
        'outputs': [],
        'payable': false,
        'stateMutability': 'nonpayable',
        'type': 'function'
    },
    {
        'anonymous': false,
        'inputs': [{
                'indexed': true,
                'name': 'playerID',
                'type': 'uint256'
            },
            {
                'indexed': false,
                'name': 'playerAddress',
                'type': 'address'
            },
            {
                'indexed': false,
                'name': 'playerName',
                'type': 'bytes32'
            },
            {
                'indexed': false,
                'name': 'ethOut',
                'type': 'uint256'
            },
            {
                'indexed': false,
                'name': 'timeStamp',
                'type': 'uint256'
            }
        ],
        'name': 'onWithdraw',
        'type': 'event'
    },
    {
        'constant': false,
        'inputs': [{
                'name': '_nameString',
                'type': 'string'
            },
            {
                'name': '_affCode',
                'type': 'address'
            },
            {
                'name': '_all',
                'type': 'bool'
            }
        ],
        'name': 'registerNameXaddr',
        'outputs': [],
        'payable': true,
        'stateMutability': 'payable',
        'type': 'function'
    },
    {
        'constant': false,
        'inputs': [{
                'name': '_nameString',
                'type': 'string'
            },
            {
                'name': '_affCode',
                'type': 'bytes32'
            },
            {
                'name': '_all',
                'type': 'bool'
            }
        ],
        'name': 'registerNameXname',
        'outputs': [],
        'payable': true,
        'stateMutability': 'payable',
        'type': 'function'
    },
    {
        'constant': false,
        'inputs': [{
                'name': '_tickets',
                'type': 'uint256'
            },
            {
                'name': '_affCode',
                'type': 'address'
            }
        ],
        'name': 'reLoadXaddr',
        'outputs': [],
        'payable': false,
        'stateMutability': 'nonpayable',
        'type': 'function'
    },
    {
        'constant': false,
        'inputs': [{
                'name': '_tickets',
                'type': 'uint256'
            },
            {
                'name': '_affCode',
                'type': 'bytes32'
            }
        ],
        'name': 'reLoadXname',
        'outputs': [],
        'payable': false,
        'stateMutability': 'nonpayable',
        'type': 'function'
    },
    {
        'constant': false,
        'inputs': [],
        'name': 'setLuckyNum',
        'outputs': [],
        'payable': false,
        'stateMutability': 'nonpayable',
        'type': 'function'
    },
    {
        'constant': false,
        'inputs': [],
        'name': 'withdraw',
        'outputs': [],
        'payable': false,
        'stateMutability': 'nonpayable',
        'type': 'function'
    },
    {
        'inputs': [],
        'payable': false,
        'stateMutability': 'nonpayable',
        'type': 'constructor'
    },
    {
        'payable': true,
        'stateMutability': 'payable',
        'type': 'fallback'
    },
    {
        'constant': true,
        'inputs': [],
        'name': 'activated_',
        'outputs': [{
            'name': '',
            'type': 'bool'
        }],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function'
    },
    {
        'constant': true,
        'inputs': [],
        'name': 'getBuyPrice',
        'outputs': [{
            'name': '',
            'type': 'uint256'
        }],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function'
    },
    {
        'constant': true,
        'inputs': [],
        'name': 'getCurrentRoundInfo',
        'outputs': [{
                'name': '',
                'type': 'uint256'
            },
            {
                'name': '',
                'type': 'uint256'
            },
            {
                'name': '',
                'type': 'uint256'
            },
            {
                'name': '',
                'type': 'uint256'
            },
            {
                'name': '',
                'type': 'uint256'
            },
            {
                'name': '',
                'type': 'uint256'
            },
            {
                'name': '',
                'type': 'uint256'
            },
            {
                'name': '',
                'type': 'uint256'
            },
            {
                'name': '',
                'type': 'uint256'
            },
            {
                'name': '',
                'type': 'address'
            },
            {
                'name': '',
                'type': 'bool'
            }
        ],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function'
    },
    {
        'constant': true,
        'inputs': [{
            'name': '_addr',
            'type': 'address'
        }],
        'name': 'getPlayerInfoByAddress',
        'outputs': [{
                'name': '',
                'type': 'uint256'
            },
            {
                'name': '',
                'type': 'bytes32'
            },
            {
                'name': '',
                'type': 'uint256'
            },
            {
                'name': '',
                'type': 'uint256'
            },
            {
                'name': '',
                'type': 'uint256'
            },
            {
                'name': '',
                'type': 'uint256'
            },
            {
                'name': '',
                'type': 'uint256'
            },
            {
                'name': '',
                'type': 'uint256'
            }
        ],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function'
    },
    {
        'constant': true,
        'inputs': [],
        'name': 'getTimeLeft',
        'outputs': [{
            'name': '',
            'type': 'uint256'
        }],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function'
    },
    {
        'constant': true,
        'inputs': [],
        'name': 'name',
        'outputs': [{
            'name': '',
            'type': 'string'
        }],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function'
    },
    {
        'constant': true,
        'inputs': [{
            'name': '',
            'type': 'address'
        }],
        'name': 'pIDxAddr_',
        'outputs': [{
            'name': '',
            'type': 'uint256'
        }],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function'
    },
    {
        'constant': true,
        'inputs': [{
            'name': '',
            'type': 'bytes32'
        }],
        'name': 'pIDxName_',
        'outputs': [{
            'name': '',
            'type': 'uint256'
        }],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function'
    },
    {
        'constant': true,
        'inputs': [{
            'name': '',
            'type': 'uint256'
        }],
        'name': 'plyr_',
        'outputs': [{
                'name': 'addr',
                'type': 'address'
            },
            {
                'name': 'name',
                'type': 'bytes32'
            },
            {
                'name': 'win',
                'type': 'uint256'
            },
            {
                'name': 'gen',
                'type': 'uint256'
            },
            {
                'name': 'aff',
                'type': 'uint256'
            },
            {
                'name': 'lrnd',
                'type': 'uint256'
            },
            {
                'name': 'laff',
                'type': 'uint256'
            },
            {
                'name': 'luckytickets',
                'type': 'uint256'
            }
        ],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function'
    },
    {
        'constant': true,
        'inputs': [{
                'name': '',
                'type': 'uint256'
            },
            {
                'name': '',
                'type': 'bytes32'
            }
        ],
        'name': 'plyrNames_',
        'outputs': [{
            'name': '',
            'type': 'bool'
        }],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function'
    },
    {
        'constant': true,
        'inputs': [{
                'name': '',
                'type': 'uint256'
            },
            {
                'name': '',
                'type': 'uint256'
            }
        ],
        'name': 'plyrRnds_',
        'outputs': [{
                'name': 'eth',
                'type': 'uint256'
            },
            {
                'name': 'tickets',
                'type': 'uint256'
            },
            {
                'name': 'mask',
                'type': 'uint256'
            },
            {
                'name': 'affnums',
                'type': 'uint256'
            },
            {
                'name': 'luckytickets',
                'type': 'uint256'
            }
        ],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function'
    },
    {
        'constant': true,
        'inputs': [],
        'name': 'randNums',
        'outputs': [{
            'name': '',
            'type': 'uint256'
        }],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function'
    },
    {
        'constant': true,
        'inputs': [],
        'name': 'rID_',
        'outputs': [{
            'name': '',
            'type': 'uint256'
        }],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function'
    },
    {
        'constant': true,
        'inputs': [{
            'name': '',
            'type': 'uint256'
        }],
        'name': 'round_',
        'outputs': [{
                'name': 'tickets',
                'type': 'uint256'
            },
            {
                'name': 'ended',
                'type': 'bool'
            },
            {
                'name': 'jackpot',
                'type': 'uint256'
            },
            {
                'name': 'start',
                'type': 'uint256'
            },
            {
                'name': 'end',
                'type': 'uint256'
            },
            {
                'name': 'winner',
                'type': 'address'
            },
            {
                'name': 'mask',
                'type': 'uint256'
            },
            {
                'name': 'found',
                'type': 'uint256'
            },
            {
                'name': 'lucknum',
                'type': 'uint256'
            },
            {
                'name': 'nextpot',
                'type': 'uint256'
            },
            {
                'name': 'blocknum',
                'type': 'uint256'
            },
            {
                'name': 'playernums',
                'type': 'uint256'
            }
        ],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function'
    },
    {
        'constant': true,
        'inputs': [],
        'name': 'searchtickets',
        'outputs': [{
                'name': '',
                'type': 'uint256'
            },
            {
                'name': '',
                'type': 'uint256'
            },
            {
                'name': '',
                'type': 'uint256'
            },
            {
                'name': '',
                'type': 'uint256'
            },
            {
                'name': '',
                'type': 'uint256'
            },
            {
                'name': '',
                'type': 'uint256'
            }
        ],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function'
    },
    {
        'constant': true,
        'inputs': [{
            'name': 'addr',
            'type': 'address'
        }],
        'name': 'searchTicketsXaddr',
        'outputs': [{
                'name': '',
                'type': 'uint256'
            },
            {
                'name': '',
                'type': 'uint256'
            },
            {
                'name': '',
                'type': 'uint256'
            },
            {
                'name': '',
                'type': 'uint256'
            },
            {
                'name': '',
                'type': 'uint256'
            },
            {
                'name': '',
                'type': 'uint256'
            }
        ],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function'
    },
    {
        'constant': true,
        'inputs': [],
        'name': 'symbol',
        'outputs': [{
            'name': '',
            'type': 'string'
        }],
        'payable': false,
        'stateMutability': 'view',
        'type': 'function'
    }
]

// or
if (typeof web3 === 'undefined') {
    // web3 = new Web3(new Web3.providers.HttpProvider('https://ropsten.infura.io/WlvljmHqo75RhK1w1QJF'))
    web3 = new Web3(new Web3.providers.HttpProvider('https://mainnet.infura.io/WlvljmHqo75RhK1w1QJF'))
}

// 通过abi 和地址获取已部署的合约对象
let contractNet = web3.eth.contract(contractAbi).at(contractAddr)
    //  合约api
let luckyCoinApi = {}

luckyCoinApi.getCurrentRoundInfo = () => {
    // 页面整体信息
    return new Promise((resolve, reject) => {
        contractNet.getCurrentRoundInfo(function(err, res) {
            if (!err) {
                if (res) {
                    resolve({
                        roundIndex: res[0].toNumber(),
                        tickets: res[1].toNumber(),
                        startTime: res[2].toNumber(),
                        endTime: res[3].toNumber(),
                        jackpot: Number(web3.fromWei(res[4].toNumber())),
                        nextpot: Number(web3.fromWei(res[5].toNumber())),
                        luckNum: res[6].toNumber(),
                        mask: res[7].toNumber(),
                        playernums: res[8].toNumber(),
                        winner: res[9].toString(),
                        ended: res[10].toString()
                    })
                }
            } else {
                reject(err)
            }
        })
    })
}

luckyCoinApi.getPlayerInfoByAddress = (addr) => {
    // 页面整体信息 & 余额
    addr = addr.toString()
    let playerInfo = new Promise((resolve, reject) => {
        contractNet.getPlayerInfoByAddress(addr, function(err, res) {
            if (!err) {
                if (res) {
                    resolve({
                        uid: res[0].toString(),
                        name: web3.toUtf8(res[1]),
                        tickets: res[2].toNumber(),
                        win: Number(web3.fromWei(res[3].toNumber())),
                        calcTicketEarn: Number(web3.fromWei(res[4].toNumber())),
                        aff_invite: Number(web3.fromWei(res[5].toNumber())),
                        eth: Number(web3.fromWei(res[6].toNumber())),
                        aff_invite_nums: res[7].toNumber()
                    })
                }
            } else {
                reject(err)
            }
        })
    })
    let getBalance = new Promise((resolve, reject) => {
        web3.eth.getBalance(addr, (err, res) => {
            if (!err) {
                if (res) {
                    resolve(web3.fromWei(res.toNumber()))
                }
            } else {
                reject(err)
            }
        })
    })
    return Promise.all([playerInfo, getBalance])
}

luckyCoinApi.searchTicketsXaddr = (addr) => {
    return new Promise((resolve, reject) => {
        if (contractNet) {
            contractNet.searchTicketsXaddr(addr, (err, res) => {
                if (!err) {
                    if (res) {
                        resolve({
                            orders0: res[0].toString(10),
                            orders1: res[1].toString(10),
                            orders2: res[2].toString(10),
                            orders3: res[3].toString(10),
                            orders4: res[4].toString(10),
                            orders5: res[5].toString(10)
                        })
                    }
                } else {
                    reject(err)
                }
            })
        }
    })
}

luckyCoinApi.testName = (regName) => {
    return new Promise((resolve, reject) => {
        if (contractNet) {
            contractNet.pIDxName_(regName.toString(), function(err, res) {
                if (!err) {
                    if (res) {
                        res.toString() === '0' ? resolve(true) : resolve(false)
                    }
                } else {
                    reject(err)
                }
            })
        } else {
            reject(new Error('contractNet error at pIDxName_'))
        }
    })
}

luckyCoinApi.registerNameXaddr = (regName, _affCode, _gas) => {
    if (typeof regName !== 'string') {
        return 'need string regName !'
    }
    if (typeof _affCode !== 'string') {
        return 'need string _affCode addr !'
    }
    if (typeof _gas === 'string') {
        _gas = parseInt(_gas)
    }
    return new Promise((resolve, reject) => {
        if (contractNet) {
            contractNet.registerNameXaddr(regName.toString(), _affCode, true, { value: web3.toWei('0.001', 'ether'), gasPrice: _gas + 2000000000 }, function(err, res) {
                if (!err) {
                    if (res) {
                        resolve(true)
                    }
                } else {
                    resolve(null)
                }
            })
        } else {
            reject(new Error('contractNet error at registerNameXaddr'))
        }
    })
}

luckyCoinApi.registerNameXname = (regName, _affCode, _gas) => {
    if (typeof regName !== 'string') {
        return 'need string regName !'
    }
    if (typeof _affCode !== 'string') {
        return 'need string _affCode addr !'
    }
    if (typeof _gas === 'string') {
        _gas = parseInt(_gas)
    }
    return new Promise((resolve, reject) => {
        if (contractNet) {
            contractNet.registerNameXname(regName.toString(), _affCode, true, { value: web3.toWei('0.001', 'ether'), gasPrice: _gas + 2000000000 }, function(err, res) {
                if (!err) {
                    if (res) {
                        resolve(true)
                    }
                } else {
                    resolve(null)
                }
            })
        } else {
            reject(new Error('contractNet error at registerNameXname'))
        }
    })
}

luckyCoinApi.reLoadXaddr = (_tickets, _affCode) => {
    if (typeof _tickets === 'string') {
        _tickets = parseInt(_tickets)
    }
    if (typeof _affCode !== 'string') {
        _affCode = _affCode.toString()
    }
    return new Promise((resolve, reject) => {
        contractNet.reLoadXaddr(_tickets, _affCode, (err, res) => {
            if (!err) {
                if (res) {
                    resolve(res)
                } else {
                    reject(new Error('reLoadXaddr error'))
                }
            } else {
                reject(err)
            }
        })
    })
}

luckyCoinApi.reLoadXname = (_tickets, _affCode) => {
    if (typeof _tickets === 'string') {
        _tickets = parseInt(_tickets)
    }
    if (typeof _affCode !== 'string') {
        _affCode = _affCode.toString()
    }
    return new Promise((resolve, reject) => {
        contractNet.reLoadXname(_tickets, _affCode, (err, res) => {
            if (!err) {
                if (res) {
                    resolve(res)
                } else {
                    reject(new Error('reLoadXname error'))
                }
            } else {
                reject(err)
            }
        })
    })
}

luckyCoinApi.buyXaddr = (_tickets, _affCode, _price, _gas) => {
    if (typeof _tickets === 'string') {
        _tickets = parseInt(_tickets)
    }
    if (typeof _affCode !== 'string') {
        _affCode = _affCode.toString()
    }
    if (typeof _price === 'string') {
        _price = parseInt(_price)
    }
    if (typeof _gas === 'string') {
        _gas = parseInt(_gas)
    }
    return new Promise((resolve, reject) => {
        contractNet.buyXaddr(_tickets, _affCode, { value: web3.toWei(_price, 'ether'), gasPrice: _gas + 2000000000 }, (err, res) => {
            if (!err) {
                if (res) {
                    resolve(res)
                } else {
                    reject(new Error('buyXaddr error'))
                }
            } else {
                resolve(null)
            }
        })
    })
}

luckyCoinApi.buyXname = (_tickets, _name, _price, _gas) => {
    if (typeof _tickets === 'string') {
        _tickets = parseInt(_tickets)
    }
    if (typeof _name !== 'string') {
        _name = _name.toString()
    }
    if (typeof _price === 'string') {
        _price = parseInt(_price)
    }
    if (typeof _gas === 'string') {
        _gas = parseInt(_gas)
    }

    return new Promise((resolve, reject) => {
        contractNet.buyXname(_tickets, _name, { value: web3.toWei(_price, 'ether'), gasPrice: _gas + 2000000000 }, (err, res) => {
            if (!err) {
                if (res) {
                    resolve(res)
                } else {
                    reject(new Error('buyXname error'))
                }
            } else {
                reject(err)
            }
        })
    })
}

luckyCoinApi.getBuyPrice = () => {
    return new Promise((resolve, reject) => {
        contractNet.getBuyPrice((err, res) => {
            if (!err) {
                if (res) {
                    resolve(Number(web3.fromWei(res.toNumber() + 1000)))
                } else {
                    reject(new Error('getBuyPrice error'))
                }
            } else {
                reject(err)
            }
        })
    })
}

luckyCoinApi.withdraw = () => {
    return new Promise((resolve, reject) => {
        contractNet.withdraw((err, res) => {
            if (!err) {
                if (res) {
                    resolve(true)
                } else {
                    reject(new Error('withdraw error'))
                }
            } else {
                reject(err)
            }
        })
    })
}

luckyCoinApi.getAccounts = () => {
    /* 获取当前账号地址 */
    return new Promise((resolve, reject) => {
        web3.eth.getAccounts((err, res) => {
            if (!err) {
                if (res) {
                    resolve(res.toString())
                }
            } else {
                reject(err)
            }
        })
    })
}

luckyCoinApi.getTimeLeft = () => {
    /* 当前时间 */
    return new Promise((resolve, reject) => {
        contractNet.getTimeLeft((err, res) => {
            if (!err) {
                if (res) {
                    resolve(res.toNumber())
                } else {
                    reject(new Error('getTimeLeft error'))
                }
            } else {
                reject(err)
            }
        })
    })
}

luckyCoinApi.round_ = (round) => {
    /* 当前时间 */
    if (typeof round === 'string') {
        round = Number(round)
    }
    return new Promise((resolve, reject) => {
        contractNet.round_(round, (err, res) => {
            if (!err) {
                if (res) {
                    let obj = {
                        luckynum: res[8].toNumber(),
                        winner: res[5].toString(),
                        prizes: Number(web3.fromWei(res[2].toNumber())),
                        cointype: '2001'
                    }
                    resolve(obj)
                } else {
                    reject(new Error('getTimeLeft error'))
                }
            } else {
                reject(err)
            }
        })
    })
}

luckyCoinApi.getgasPrice = () => {
    /* 当前时间 */
    return new Promise((resolve, reject) => {
        web3.eth.getGasPrice((err, res) => {
            if (!err) {
                if (res) {
                    resolve(res.toNumber())
                } else {
                    reject(new Error('getGasPrice error'))
                }
            } else {
                reject(err)
            }
        })
    })
}

export {
    web3,
    contractNet,
    luckyCoinApi
}