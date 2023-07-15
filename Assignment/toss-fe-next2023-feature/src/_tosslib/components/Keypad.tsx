import { DElement, ErrorM, InputValue, Pw, Value } from 'pages/KeypadPage';
import { CreateKeypad, createKeypad } from 'pages/remotes';
import { Dispatch, SetStateAction, useState } from 'react';

interface Props {
  type: 'pw' | 'pwC';
  useInput: [InputValue, Dispatch<SetStateAction<InputValue>>];
  useElement: [DElement, Dispatch<SetStateAction<DElement>>];
  useError: [ErrorM, Dispatch<SetStateAction<ErrorM>>];
  usePw: [Pw, Dispatch<SetStateAction<Pw>>];
}

export const arr: CreateKeypad[] = [];

const Keypad = ({
  type,
  useInput: [inputValue, setInputValue], // pw, pwc input에 뿌려주는곳
  useElement: [element, setElement], // data 받는곳
  useError: [error, setError], // 에러받는곳
  usePw: [_, setF], // 키패드 각자 나타나게 하는 trigger
}: Props) => {
  const [currentV, setCurrentV] = useState<Value>({
    uid: '',
    coordinate: [],
    numbering: [],
  });

  const setValue = ({ uid, item, ij }: { uid: string; item: string; ij: number[] }) => {
    const value: { coordinate: number[]; numbering: number | null } = { coordinate: [], numbering: 0 };

    value['coordinate'] = ij;
    value['numbering'] = item.match('data-testid="\\d') && Number(item.match('data-testid="\\d')![0].split('="')[1]);

    if (!currentV.numbering.length) {
      setError({ e1: '비밀번호를 입력해주세요.', e2: '' });
    }
    if (
      (type === 'pw' && inputValue!.pw.numbering.length > 5) ||
      (type === 'pwC' && inputValue!.pwC.numbering.length > 5)
    ) {
      setError({ e1: '', e2: '6자리로 입력해주세요' });
      setCurrentV({
        uid,
        coordinate: [...currentV.coordinate],
        numbering: [...currentV.numbering],
      });
      if (type === 'pw') {
        setInputValue({
          pw: { ...currentV },
          pwC: {
            uid: '',
            coordinate: [],
            numbering: [],
          },
        });
      }
      if (type === 'pwC') {
        setInputValue({
          ...inputValue,
          pwC: { ...currentV },
        });
      }
    } else {
      setError({ e1: '', e2: '' });
      setCurrentV({
        uid,
        coordinate: [...currentV.coordinate, value.coordinate],
        numbering:
          value.numbering !== null ? [...currentV.numbering, value.numbering as number] : [...currentV.numbering],
      });
      if (type === 'pw') {
        setInputValue({
          pw: {
            ...currentV,
            coordinate: [...currentV.coordinate, value.coordinate],
            numbering:
              value.numbering !== null ? [...currentV.numbering, value.numbering as number] : [...currentV.numbering],
          },
          pwC: {
            uid: '',
            coordinate: [],
            numbering: [],
          },
        });
      } else if (type === 'pwC') {
        setInputValue({
          ...inputValue,
          pwC: {
            ...currentV,
            coordinate: [...currentV.coordinate, value.coordinate],
            numbering:
              value.numbering !== null ? [...currentV.numbering, value.numbering as number] : [...currentV.numbering],
          },
        });
      }
    }
  };

  const call = async () => {
    try {
      if (!element.mount || element.pwCd.pd.length) {
        const {
          uid,
          keypad: { svgGrid },
        } = await createKeypad();

        setElement(pre => ({
          //   pwD: { pw: [...pre.pwCd.pwC], uid: pre.pwCd.uid },
          pwD: { ...pre.pwCd },
          pwCd: { uid, pd: svgGrid },
          mount: true,
        }));
        // setCurrentV({ ...currentV, uid });

        // await createKeypad().then(value => {
        //   //   arr = [...arr, value];
        //   arr.push(value);
        //   console.log(arr);
        // });

        // setInputValue({ coordinate: [], numbering: [] });
      }

      //   arr.forEach(value => {
      //     const {
      //       keypad: { svgGrid },
      //     } = value;
      //     console.log(value);

      //     setElement({ data: svgGrid, mount: true });
      //   });
    } catch (err: any) {
      console.log(err);
    }
  };
  if (!element.mount) {
    call();
  }

  const els = ({ uid, pd }: { uid: string; pd: string[][] }) => {
    return pd.map((el, i) => {
      const flexArea = el.map((item, j) => {
        if (!item.includes('<g>')) {
          return <div key={`p_${i}`} dangerouslySetInnerHTML={{ __html: item }} onClick={call}></div>;
        }

        return (
          <div
            key={`c_${i}_${j}`}
            onClick={() => {
              setValue({ uid, item, ij: [i, j] });
            }}
            dangerouslySetInnerHTML={{ __html: item }}
          ></div>
        );
      });
      const spanEl = (i: number) => {
        switch (i) {
          case 0:
            return (
              <span
                onClick={() => {
                  if (type === 'pw') {
                    setInputValue({
                      ...inputValue,
                      pw: {
                        ...inputValue.pw,
                        coordinate: [...inputValue.pw.coordinate.slice(0, -1)],
                        numbering: [...inputValue.pw.numbering.slice(0, -1)],
                      },
                    });
                  }
                  if (type === 'pwC') {
                    setInputValue({
                      ...inputValue,
                      pwC: {
                        ...inputValue.pwC,

                        coordinate: [...inputValue.pwC.coordinate.slice(0, -1)],
                        numbering: [...inputValue.pwC.numbering.slice(0, -1)],
                      },
                    });
                  }
                }}
              >
                ←
              </span>
            );
          case 1:
            return (
              <span
                onClick={() => {
                  setCurrentV({ uid: '', coordinate: [], numbering: [] });
                  setInputValue({
                    pw: { uid: '', coordinate: [], numbering: [] },
                    pwC: { uid: '', coordinate: [], numbering: [] },
                  });
                  setError({ ...error, e2: '' });
                }}
              >
                전체삭제
              </span>
            );
          case 2:
            return (
              <span
                className="confirm"
                onClick={() => {
                  if (inputValue.pw.numbering.length < 6) {
                    setCurrentV({ uid: '', coordinate: [], numbering: [] });
                    setInputValue({
                      pw: { uid: '', coordinate: [], numbering: [] },
                      pwC: { uid: '', coordinate: [], numbering: [] },
                    });
                  }
                  setF({ pw: false, pwC: false });
                }}
              >
                확인
              </span>
            );
        }
        return <span></span>;
      };

      return (
        <div className="flex_area" key={`${i}`}>
          {flexArea}
          {spanEl(i)}
        </div>
      );
    });
  };

  return (
    <>
      {type === 'pwC' ? els(element.pwCd) : els(element.pwD)}
      <p>{error.e1}</p>
      <p>{error.e2}</p>
    </>
  );
};

export default Keypad;
