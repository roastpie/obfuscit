(function (_0x4e572f, _0x433b95) {
	const _0x278491 = _0x1630,
		_0x4896ce = _0x4e572f();
	while (!![]) {
		try {
			const _0x27b67d =
				parseInt(_0x278491(0x155)) / 0x1 +
				(-parseInt(_0x278491(0x169)) / 0x2) * (parseInt(_0x278491(0x16f)) / 0x3) +
				-parseInt(_0x278491(0x157)) / 0x4 +
				(parseInt(_0x278491(0x15c)) / 0x5) * (parseInt(_0x278491(0x147)) / 0x6) +
				parseInt(_0x278491(0x172)) / 0x7 +
				(-parseInt(_0x278491(0x164)) / 0x8) * (parseInt(_0x278491(0x173)) / 0x9) +
				(parseInt(_0x278491(0x15f)) / 0xa) * (parseInt(_0x278491(0x148)) / 0xb);
			if (_0x27b67d === _0x433b95) break;
			else _0x4896ce['push'](_0x4896ce['shift']());
		} catch (_0x46f3cf) {
			_0x4896ce['push'](_0x4896ce['shift']());
		}
	}
})(_0x59e7, 0xaf36c);
function _0x59e7() {
	const _0x207597 = [
		'charAt',
		'random',
		'map',
		'slice',
		'3SxVFhm',
		'from',
		'match',
		'3666705dJDYuw',
		'9Uxftvl',
		'currentDir',
		'6FTUfVP',
		'55scdhNb',
		'length',
		'replaceAll',
		'tw-obfuscate',
		'split',
		'suffix',
		'parse',
		'join',
		'writeFileSync',
		'replace',
		'/classList.json',
		'utf8',
		'walkRules',
		'548319mMezpm',
		'readFileSync',
		'3061676pAXfnU',
		'keys',
		'toString',
		'selectors',
		'stringify',
		'3438295kAEFmZ',
		'trim',
		'class=\x22',
		'3069590rHPjPU',
		'prefix',
		'.css',
		'log',
		'startsWith',
		'6293096kHTqMh',
		'existsSync',
		'endsWith',
		'includes',
		'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz',
		'2049712dULbTE',
		'floor'
	];
	_0x59e7 = function () {
		return _0x207597;
	};
	return _0x59e7();
}
import _0x400e17 from 'postcss';
function _0x1630(_0x3a9607, _0x4b386d) {
	const _0x59e746 = _0x59e7();
	return (
		(_0x1630 = function (_0x1630e4, _0x1592b4) {
			_0x1630e4 = _0x1630e4 - 0x146;
			let _0x41d6a9 = _0x59e746[_0x1630e4];
			return _0x41d6a9;
		}),
		_0x1630(_0x3a9607, _0x4b386d)
	);
}
import * as _0xd48d5b from 'fs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const currentFilePath = fileURLToPath(import.meta['url']),
	currentDir = dirname(currentFilePath),
	isIncludedHtml = (_0x431dc7) => {
		const _0x48d3a7 = /<([^\s</>]+)(?:("(?:[^"\\]|\\.)*")|[^>"])+>(.*?)<\/\1 *>/g;
		return _0x48d3a7['test'](_0x431dc7);
	},
	generateRandomString = (_0x1d5750 = 0x6, _0xe2d89c = '', _0x3e7ff4 = '') => {
		const _0xcc8d00 = _0x1630,
			_0x352db9 = () => {
				const _0x22c9dd = _0x1630,
					_0x1a15cb = _0x22c9dd(0x168);
				return _0x1a15cb[_0x22c9dd(0x16b)](
					Math[_0x22c9dd(0x16a)](Math[_0x22c9dd(0x16c)]() * _0x1a15cb[_0x22c9dd(0x149)])
				);
			},
			_0x29ed0c = Array[_0xcc8d00(0x170)]({ length: _0x1d5750 }, (_0x5ccc33, _0x205483) =>
				_0x205483 === 0x0 ? _0x352db9()[_0xcc8d00(0x151)](/[0-9]/, _0x352db9()) : _0x352db9()
			)['join']('');
		return '' + _0xe2d89c + _0x29ed0c + _0x3e7ff4;
	},
	Plugin = (_0x21cd08) => {
		const _0x110bd9 = _0x1630,
			_0x4f7a7c = _0x21cd08?.['length'] || 0x6,
			_0x7e9480 = _0x21cd08?.[_0x110bd9(0x160)] || '',
			_0x4ddddf = _0x21cd08?.[_0x110bd9(0x14d)] || '';
		console[_0x110bd9(0x162)](_0x110bd9(0x146), currentDir + _0x110bd9(0x152));
		let _0x2c110e = _0xd48d5b[_0x110bd9(0x165)](currentDir + _0x110bd9(0x152))
			? JSON[_0x110bd9(0x14e)](
					_0xd48d5b[_0x110bd9(0x156)](currentDir + _0x110bd9(0x152), _0x110bd9(0x153))
				)
			: {};
		return {
			name: _0x110bd9(0x14b),
			transform(_0x3ccf5a, _0x12d77f) {
				const _0x49f416 = _0x110bd9;
				Object[_0x49f416(0x158)](_0x2c110e)['forEach']((_0x300321) => {
					const _0x280959 = _0x49f416;
					_0x2c110e[_0x300321] = _0x2c110e[_0x300321][_0x280959(0x151)](/\\/g, '');
				});
				let _0x92ebae = _0x3ccf5a;
				isIncludedHtml(_0x3ccf5a) &&
					(_0x92ebae = _0x3ccf5a[_0x49f416(0x151)](
						/class=["']([^"']+)["']/g,
						(_0x5da68f, _0x332b94) => {
							const _0x112a8e = _0x49f416,
								_0x9f5f1c = _0x332b94['replace'](/\s+/g, '\x20')[_0x112a8e(0x14c)]('\x20'),
								_0x5c551c = _0x9f5f1c[_0x112a8e(0x16d)]((_0x15de4f) => {
									return (
										!_0x2c110e[_0x15de4f] &&
											(_0x2c110e[_0x15de4f] = generateRandomString(
												_0x4f7a7c,
												_0x7e9480,
												_0x4ddddf
											)),
										_0x15de4f
									);
								})
									['map']((_0x3937d4) => _0x2c110e[_0x3937d4])
									['join']('\x20');
							return _0x112a8e(0x15e) + _0x5c551c + '\x22';
						}
					));
				if (_0x12d77f[_0x49f416(0x166)](_0x49f416(0x161))) {
					const _0x132e2e = _0x400e17[_0x49f416(0x14e)](_0x3ccf5a);
					_0x132e2e[_0x49f416(0x154)]((_0x213ecc) => {
						const _0x516edc = _0x49f416;
						return (
							(_0x213ecc[_0x516edc(0x15a)] = _0x213ecc[_0x516edc(0x15a)]['map']((_0x3785aa) => {
								const _0x176c7e = _0x516edc;
								if (_0x3785aa[_0x176c7e(0x163)]('.')) {
									_0x3785aa = _0x3785aa[_0x176c7e(0x151)](
										/([^\\]):(hover|focus|active|visited|link|target|enabled|disabled|checked|default|valid|invalid|required|optional|read-only|read-write|placeholder-shown|in-range|out-of-range|empty|nth-child|nth-last-child|first-child|last-child|only-child|first-of-type|last-of-type|only-of-type|root|empty|fullscreen|not|matches|nth-of-type|nth-last-of-type|first-letter|first-line|before|after|selection|backdrop|first-line|first-letter|marker|spelling-error|grammar-error|placeholder|file-selector-button|file-selector-button|file-icon|file-name|file-size|file-type|file-button)/g,
										'$1@$2'
									);
									let _0xc411c3 = '';
									(_0x3785aa[_0x176c7e(0x167)]('>') ||
										_0x3785aa[_0x176c7e(0x167)]('+') ||
										_0x3785aa[_0x176c7e(0x167)]('~')) &&
										((_0xc411c3 = _0x3785aa[_0x176c7e(0x159)]()
											['split'](/(>|~|\+)/)
											[_0x176c7e(0x16e)](0x1)
											[_0x176c7e(0x14f)]('')
											[_0x176c7e(0x14a)](/@/g, ':')),
										(_0x3785aa = _0x3785aa['toString']()['split'](/(>|~|\+)/)[0x0]));
									let _0x30c44c = _0x3785aa[_0x176c7e(0x171)](/@([a-z-]+)/);
									_0x30c44c && (_0x30c44c = _0x30c44c[0x0][_0x176c7e(0x151)](/@/g, ':'));
									(_0x3785aa = _0x3785aa['toString']()
										[_0x176c7e(0x14a)](/@/g, ':')
										[_0x176c7e(0x151)](/\\:/g, ':')
										[_0x176c7e(0x151)](/\\\//g, '/')
										[_0x176c7e(0x151)](/\\\[/g, '[')
										[_0x176c7e(0x151)](/\\\]/g, ']')),
										(_0x3785aa = _0x3785aa['slice'](0x1));
									let _0x1d1d62 = generateRandomString(_0x4f7a7c, _0x7e9480, _0x4ddddf);
									const _0x51646f =
										/^(.*?)(?::(hover|focus|active|visited|link|target|enabled|disabled|checked|default|valid|invalid|required|optional|read-only|read-write|placeholder-shown|in-range|out-of-range|empty|nth-child|nth-last-child|first-child|last-child|only-child|first-of-type|last-of-type|only-of-type|root|empty|fullscreen|not|matches|nth-of-type|nth-last-of-type|first-letter|first-line|before|after|selection|backdrop|first-line|first-letter|marker|spelling-error|grammar-error|placeholder|file-selector-button|file-selector-button|file-icon|file-name|file-size|file-type|file-button))?$/;
									!_0x2c110e[
										_0x3785aa[_0x176c7e(0x171)](_0x51646f)[0x1]
											[_0x176c7e(0x151)](/\\/g, '')
											['trim']()
									]
										? ((_0x2c110e[
												_0x3785aa['match'](_0x51646f)[0x1]
													[_0x176c7e(0x151)](/\\/g, '')
													[_0x176c7e(0x15d)]()
											] = _0x1d1d62),
											(_0x3785aa =
												'.' + _0x1d1d62 + (_0x30c44c || '') + '\x20' + (_0xc411c3 || '')))
										: /:(hover|focus|active|visited|link|target|enabled|disabled|checked|default|valid|invalid|required|optional|read-only|read-write|placeholder-shown|in-range|out-of-range|empty|nth-child|nth-last-child|first-child|last-child|only-child|first-of-type|last-of-type|only-of-type|root|empty|fullscreen|not|matches|nth-of-type|nth-last-of-type|first-letter|first-line|before|after|selection|backdrop|first-line|first-letter|marker|spelling-error|grammar-error|placeholder|file-selector-button|file-icon|file-name|file-size|file-type|file-button)$/[
													'test'
											  ](_0x3785aa)
											? (_0x3785aa =
													'.' +
														_0x2c110e[
															_0x3785aa[_0x176c7e(0x171)](
																/^(.*?)(?::(hover|focus|active|visited|link|target|enabled|disabled|checked|default|valid|invalid|required|optional|read-only|read-write|placeholder-shown|in-range|out-of-range|empty|nth-child|nth-last-child|first-child|last-child|only-child|first-of-type|last-of-type|only-of-type|root|empty|fullscreen|not|matches|nth-of-type|nth-last-of-type|first-letter|first-line|before|after|selection|backdrop|first-line|first-letter|marker|spelling-error|grammar-error|placeholder|file-selector-button|file-icon|file-name|file-size|file-type|file-button))?$/
															)[0x1]
														] +
														_0x30c44c ||
													'' + '\x20' + _0xc411c3 ||
													'')
											: (_0x3785aa = '.' + _0x2c110e[_0x3785aa]),
										(_0x3785aa = _0x3785aa['trim']());
								}
								return _0x3785aa;
							})),
							_0x213ecc
						);
					}),
						(_0x92ebae = _0x132e2e[_0x49f416(0x159)]());
				}
				return (
					_0xd48d5b[_0x49f416(0x150)](
						currentDir + _0x49f416(0x152),
						JSON[_0x49f416(0x15b)](_0x2c110e, null, 0x2)
					),
					{ code: _0x92ebae, map: null }
				);
			}
		};
	};
export default Plugin;
