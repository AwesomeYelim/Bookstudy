import { Button } from '_tosslib/components/Button';
import { Input } from '_tosslib/components/Input';
import { Spacing } from '_tosslib/components/Spacing';
import { Txt } from '_tosslib/components/Txt';
import colors from '_tosslib/constants/colors';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import Keypad from '_tosslib/components/Keypad';
import './keypad.scss';
import { submitPassword } from './remotes';

export type Value = { uid: string; coordinate: number[][]; numbering: number[] };

export type InputValue = {
  pw: Value;
  pwC: Value;
};
export type ErrorM = { e1: string; e2: string };
export type DElement = { pwD: { uid: string; pd: string[][] }; pwCd: { uid: string; pd: string[][] }; mount: boolean };
export type Pw = { pw: boolean; pwC: boolean };

export function KeypadPage() {
  const usePw = useState<Pw>({ pw: false, pwC: false });
  const useElement = useState<DElement>({ pwD: { uid: '', pd: [] }, pwCd: { uid: '', pd: [] }, mount: false });
  const useError = useState<ErrorM>({ e1: '비밀번호를 입력해주세요.', e2: '' });
  const useInput = useState<InputValue>({
    pw: {
      uid: '',
      coordinate: [],
      numbering: [],
    },
    pwC: {
      uid: '',
      coordinate: [],
      numbering: [],
    },
  });

  const props = { usePw, useElement, useError, useInput };

  const pwRef = useRef<HTMLInputElement>(null);

  const outSideClick = useCallback((e: MouseEvent) => {
    if (!pwRef.current?.contains(e.target as Node)) {
      useError[1]({ ...useError[0], e2: '' });
      usePw[1]({ ...usePw[0], pw: false });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    document.addEventListener('mousedown', outSideClick);
    return () => document.removeEventListener('mousedown', outSideClick);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pwRef]);

  const inputData = {
    pw_u: useInput[0].pw.uid,
    pw_c: useInput[0].pw.coordinate.map(([i, j]) => {
      return {
        x: i,
        y: j,
      };
    }),
    pw_n: useInput[0].pw.numbering.join(''),
    pwc_u: useInput[0].pwC.uid,
    pwc_c: useInput[0].pwC.coordinate.map(([i, j]) => {
      return {
        x: i,
        y: j,
      };
    }),
    pwc_n: useInput[0].pwC.numbering.join(''),
  };

  return (
    <section>
      {/* <Txt typography="h1" color={colors.black}>
        보안키패드
      </Txt> */}
      <div className="pw" ref={pwRef}>
        <Input label="비밀번호">
          <Input.TextField
            type="password"
            onFocus={() => {
              usePw[1]({ pw: true, pwC: false });
            }}
            value={inputData.pw_n}
          />
        </Input>
        <div className="keypad_area">{usePw[0].pw && <Keypad type="pw" {...props} />}</div>
        <Spacing size={24} />
        <Input label="비밀번호 확인">
          <Input.TextField type="password" onFocus={() => usePw[1]({ pw: false, pwC: true })} value={inputData.pwc_n} />
        </Input>
        <div className="keypad_area">{usePw[0].pwC && <Keypad type="pwC" {...props} />}</div>
      </div>

      <Spacing size={24} />

      <Button
        onClick={() => {
          if (
            inputData.pw_n === inputData.pwc_n &&
            inputData.pw_n.length > 5 &&
            inputData.pwc_n.length > 5 &&
            inputData.pw_c.length > 5 &&
            inputData.pwc_c.length > 5
          ) {
            submitPassword(
              { uid: inputData.pw_u, coords: inputData.pw_c },
              { uid: inputData.pwc_u, coords: inputData.pwc_c }
            ).then(res => {
              if (res) {
                console.log(`${res} 200 ok`);
              } else {
                console.log(` error`);
              }
            });
          }
        }}
        css={{ width: '100%' }}
      >
        완료
      </Button>
    </section>
  );
}
