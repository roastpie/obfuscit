const _0x54507f = _0x1d90;
(function (_0x3b29d8, _0x5453dc) {
	const _0xcaa83e = _0x1d90,
		_0x1e94af = _0x3b29d8();
	while (!![]) {
		try {
			const _0xd37b8b =
				(-parseInt(_0xcaa83e(0x19b)) / 0x1) * (parseInt(_0xcaa83e(0x192)) / 0x2) +
				parseInt(_0xcaa83e(0x19c)) / 0x3 +
				(parseInt(_0xcaa83e(0x198)) / 0x4) * (parseInt(_0xcaa83e(0x19f)) / 0x5) +
				-parseInt(_0xcaa83e(0x188)) / 0x6 +
				-parseInt(_0xcaa83e(0x1a5)) / 0x7 +
				(-parseInt(_0xcaa83e(0x18a)) / 0x8) * (parseInt(_0xcaa83e(0x189)) / 0x9) +
				parseInt(_0xcaa83e(0x1a3)) / 0xa;
			if (_0xd37b8b === _0x5453dc) break;
			else _0x1e94af['push'](_0x1e94af['shift']());
		} catch (_0x480c66) {
			_0x1e94af['push'](_0x1e94af['shift']());
		}
	}
})(_0x4573, 0xe9638);
function _0x4573() {
	const _0x3dea38 = [
		'5016054bzKemT',
		'215937jPxalW',
		'472RGBNkD',
		'readFileSync',
		'join',
		'prefix',
		'writeFileSync',
		'suffix',
		'slice',
		'from',
		'38FOamwB',
		'test',
		'match',
		'replaceAll',
		'/classList.json',
		'map',
		'1755988dHfWNS',
		'includes',
		'charAt',
		'21243Civdxc',
		'2284806BdYXNi',
		'url',
		'floor',
		'15WGmsaU',
		'endsWith',
		'keys',
		'toString',
		'22905430JSLKZE',
		'split',
		'5305741ohhujh',
		'length',
		'class=\x22',
		'replace',
		'stringify',
		'parse',
		'selectors',
		'random',
		'forEach',
		'trim',
		'walkRules',
		'$1@$2'
	];
	_0x4573 = function () {
		return _0x3dea38;
	};
	return _0x4573();
}
import _0x318de2 from 'postcss';
import * as _0x429972 from 'fs';
function _0x1d90(_0x44a721, _0x5845b7) {
	const _0x45739f = _0x4573();
	return (
		(_0x1d90 = function (_0x1d9063, _0x709b41) {
			_0x1d9063 = _0x1d9063 - 0x187;
			let _0x103cb6 = _0x45739f[_0x1d9063];
			return _0x103cb6;
		}),
		_0x1d90(_0x44a721, _0x5845b7)
	);
}
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const currentFilePath = fileURLToPath(import.meta[_0x54507f(0x19d)]),
	currentDir = dirname(currentFilePath),
	isIncludedHtml = (_0x44bea0) => {
		const _0x41c2ab = _0x54507f,
			_0x2d1d3e = /<([^\s</>]+)(?:("(?:[^"\\]|\\.)*")|[^>"])+>(.*?)<\/\1 *>/g;
		return _0x2d1d3e[_0x41c2ab(0x193)](_0x44bea0);
	},
	generateRandomString = (_0x39c7d8 = 0x6, _0x889c80 = '', _0x4082cd = '') => {
		const _0x4fe59d = _0x54507f,
			_0x4a7127 = () => {
				const _0x351a02 = _0x1d90,
					_0x1ffb50 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
				return _0x1ffb50[_0x351a02(0x19a)](
					Math[_0x351a02(0x19e)](Math[_0x351a02(0x1ac)]() * _0x1ffb50[_0x351a02(0x1a6)])
				);
			},
			_0x38432f = Array[_0x4fe59d(0x191)]({ length: _0x39c7d8 }, (_0x157983, _0x5d72c6) =>
				_0x5d72c6 === 0x0 ? _0x4a7127()[_0x4fe59d(0x1a8)](/[0-9]/, _0x4a7127()) : _0x4a7127()
			)[_0x4fe59d(0x18c)]('');
		return '' + _0x889c80 + _0x38432f + _0x4082cd;
	},
	Plugin = (_0x5ee698) => {
		const _0x4fa1b0 = _0x54507f,
			_0x822829 = _0x5ee698?.[_0x4fa1b0(0x1a6)] || 0x6,
			_0x3ee57d = _0x5ee698?.[_0x4fa1b0(0x18d)] || '',
			_0xe516c = _0x5ee698?.[_0x4fa1b0(0x18f)] || '';
		let _0x249cf2 = _0x429972['existsSync'](currentDir + _0x4fa1b0(0x196))
			? JSON['parse'](_0x429972[_0x4fa1b0(0x18b)](currentDir + _0x4fa1b0(0x196), 'utf8'))
			: {};
		return {
			name: 'tw-obfuscate',
			transform(_0x33618f, _0x180e6c) {
				const _0x1cb76f = _0x4fa1b0;
				Object[_0x1cb76f(0x1a1)](_0x249cf2)[_0x1cb76f(0x1ad)]((_0x427757) => {
					const _0x7794e5 = _0x1cb76f;
					_0x249cf2[_0x427757] = _0x249cf2[_0x427757][_0x7794e5(0x1a8)](/\\/g, '');
				});
				let _0x4aa019 = _0x33618f;
				isIncludedHtml(_0x33618f) &&
					(_0x4aa019 = _0x33618f[_0x1cb76f(0x1a8)](
						/class=["']([^"']+)["']/g,
						(_0x205b2b, _0x2dba03) => {
							const _0x5dc448 = _0x1cb76f,
								_0x3090f8 = _0x2dba03[_0x5dc448(0x1a8)](/\s+/g, '\x20')[_0x5dc448(0x1a4)]('\x20'),
								_0x1fb850 = _0x3090f8[_0x5dc448(0x197)]((_0x2868df) => {
									return (
										!_0x249cf2[_0x2868df] &&
											(_0x249cf2[_0x2868df] = generateRandomString(_0x822829, _0x3ee57d, _0xe516c)),
										_0x2868df
									);
								})
									['map']((_0x7939eb) => _0x249cf2[_0x7939eb])
									[_0x5dc448(0x18c)]('\x20');
							return _0x5dc448(0x1a7) + _0x1fb850 + '\x22';
						}
					));
				if (_0x180e6c[_0x1cb76f(0x1a0)]('.css')) {
					const _0x473a6a = _0x318de2[_0x1cb76f(0x1aa)](_0x33618f);
					_0x473a6a[_0x1cb76f(0x1af)]((_0xc10a95) => {
						const _0x39b8aa = _0x1cb76f;
						return (
							(_0xc10a95[_0x39b8aa(0x1ab)] = _0xc10a95['selectors']['map']((_0x392d71) => {
								const _0x212b4e = _0x39b8aa;
								if (_0x392d71['startsWith']('.')) {
									_0x392d71 = _0x392d71['replace'](
										/([^\\]):(hover|focus|active|visited|link|target|enabled|disabled|checked|default|valid|invalid|required|optional|read-only|read-write|placeholder-shown|in-range|out-of-range|empty|nth-child|nth-last-child|first-child|last-child|only-child|first-of-type|last-of-type|only-of-type|root|empty|fullscreen|not|matches|nth-of-type|nth-last-of-type|first-letter|first-line|before|after|selection|backdrop|first-line|first-letter|marker|spelling-error|grammar-error|placeholder|file-selector-button|file-selector-button|file-icon|file-name|file-size|file-type|file-button)/g,
										_0x212b4e(0x187)
									);
									let _0x252871 = '';
									(_0x392d71['includes']('>') ||
										_0x392d71[_0x212b4e(0x199)]('+') ||
										_0x392d71['includes']('~')) &&
										((_0x252871 = _0x392d71[_0x212b4e(0x1a2)]()
											['split'](/(>|~|\+)/)
											[_0x212b4e(0x190)](0x1)
											['join']('')
											['replaceAll'](/@/g, ':')),
										(_0x392d71 = _0x392d71['toString']()[_0x212b4e(0x1a4)](/(>|~|\+)/)[0x0]));
									let _0x2601c4 = _0x392d71['match'](/@([a-z-]+)/);
									_0x2601c4 && (_0x2601c4 = _0x2601c4[0x0][_0x212b4e(0x1a8)](/@/g, ':'));
									(_0x392d71 = _0x392d71[_0x212b4e(0x1a2)]()
										[_0x212b4e(0x195)](/@/g, ':')
										['replace'](/\\:/g, ':')
										[_0x212b4e(0x1a8)](/\\\//g, '/')
										[_0x212b4e(0x1a8)](/\\\[/g, '[')
										['replace'](/\\\]/g, ']')),
										(_0x392d71 = _0x392d71[_0x212b4e(0x190)](0x1));
									let _0x1414d4 = generateRandomString(_0x822829, _0x3ee57d, _0xe516c);
									const _0x367d4d =
										/^(.*?)(?::(hover|focus|active|visited|link|target|enabled|disabled|checked|default|valid|invalid|required|optional|read-only|read-write|placeholder-shown|in-range|out-of-range|empty|nth-child|nth-last-child|first-child|last-child|only-child|first-of-type|last-of-type|only-of-type|root|empty|fullscreen|not|matches|nth-of-type|nth-last-of-type|first-letter|first-line|before|after|selection|backdrop|first-line|first-letter|marker|spelling-error|grammar-error|placeholder|file-selector-button|file-selector-button|file-icon|file-name|file-size|file-type|file-button))?$/;
									!_0x249cf2[
										_0x392d71[_0x212b4e(0x194)](_0x367d4d)[0x1]
											[_0x212b4e(0x1a8)](/\\/g, '')
											[_0x212b4e(0x1ae)]()
									]
										? ((_0x249cf2[
												_0x392d71[_0x212b4e(0x194)](_0x367d4d)[0x1]
													[_0x212b4e(0x1a8)](/\\/g, '')
													[_0x212b4e(0x1ae)]()
											] = _0x1414d4),
											(_0x392d71 =
												'.' + _0x1414d4 + (_0x2601c4 || '') + '\x20' + (_0x252871 || '')))
										: /:(hover|focus|active|visited|link|target|enabled|disabled|checked|default|valid|invalid|required|optional|read-only|read-write|placeholder-shown|in-range|out-of-range|empty|nth-child|nth-last-child|first-child|last-child|only-child|first-of-type|last-of-type|only-of-type|root|empty|fullscreen|not|matches|nth-of-type|nth-last-of-type|first-letter|first-line|before|after|selection|backdrop|first-line|first-letter|marker|spelling-error|grammar-error|placeholder|file-selector-button|file-icon|file-name|file-size|file-type|file-button)$/[
													_0x212b4e(0x193)
											  ](_0x392d71)
											? (_0x392d71 =
													'.' +
														_0x249cf2[
															_0x392d71[_0x212b4e(0x194)](
																/^(.*?)(?::(hover|focus|active|visited|link|target|enabled|disabled|checked|default|valid|invalid|required|optional|read-only|read-write|placeholder-shown|in-range|out-of-range|empty|nth-child|nth-last-child|first-child|last-child|only-child|first-of-type|last-of-type|only-of-type|root|empty|fullscreen|not|matches|nth-of-type|nth-last-of-type|first-letter|first-line|before|after|selection|backdrop|first-line|first-letter|marker|spelling-error|grammar-error|placeholder|file-selector-button|file-icon|file-name|file-size|file-type|file-button))?$/
															)[0x1]
														] +
														_0x2601c4 ||
													'' + '\x20' + _0x252871 ||
													'')
											: (_0x392d71 = '.' + _0x249cf2[_0x392d71]),
										(_0x392d71 = _0x392d71['trim']());
								}
								return _0x392d71;
							})),
							_0xc10a95
						);
					}),
						(_0x4aa019 = _0x473a6a[_0x1cb76f(0x1a2)]());
				}
				return (
					_0x429972[_0x1cb76f(0x18e)](
						currentDir + _0x1cb76f(0x196),
						JSON[_0x1cb76f(0x1a9)](_0x249cf2, null, 0x2)
					),
					{ code: _0x4aa019, map: null }
				);
			}
		};
	};
export default Plugin;
