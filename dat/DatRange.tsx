import * as React       from 'react'
import styled           from 'styled-components'
import Slider           from 'react-rangeslider'

import { DatItem }      from './DatItem'
import { DatLabelText } from './DatLabelText'
import { DatInput }     from './DatInput'

const SliderWrapper = styled.div`
  width: 100%;

  .rangeslider {
    margin: 20px 0;
    position: relative;
    background: #e6e6e6;
    -ms-touch-action: none;
    touch-action: none;

    &,
    .rangeslider__fill {
      display: block;
      box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.4);
    }

    .rangeslider__handle {
      background: #fff;
      border: 1px solid #ccc;
      cursor: pointer;
      display: inline-block;
      position: absolute;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4), 0 -1px 3px rgba(0, 0, 0, 0.4);
      .rangeslider__active {
        opacity: 1;
      }
    }

    .rangeslider__handle-tooltip {
      width: 40px;
      height: 40px;
      text-align: center;
      position: absolute;
      background-color: rgba(0, 0, 0, 0.8);
      font-weight: normal;
      font-size: 14px;
      transition: all 100ms ease-in;
      border-radius: 4px;
      display: inline-block;
      color: white;
      left: 50%;
      transform: translate3d(-50%, 0, 0);

      span {
        margin-top: 12px;
        display: inline-block;
        line-height: 100%;
      }

      &:after {
        content: ' ';
        position: absolute;
        width: 0;
        height: 0;
      }
    }
  }

  .rangeslider-horizontal {
    height: 12px;
    border-radius: 10px;

    .rangeslider__fill {
      height: 100%;
      background-color: #7cb342;
      border-radius: 10px;
      top: 0;
    }

    .rangeslider__handle {
      width: 30px;
      height: 30px;
      border-radius: 30px;
      top: 50%;
      transform: translate3d(-50%, -50%, 0);

      &:after {
        content: ' ';
        position: absolute;
        width: 16px;
        height: 16px;
        top: 6px;
        left: 6px;
        border-radius: 50%;
        background-color: #dadada;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4) inset, 0 -1px 3px rgba(0, 0, 0, 0.4) inset;
      }
    }

    .rangeslider__handle-tooltip {
      top: -55px;
      &:after {
        border-left: 8px solid transparent;
        border-right: 8px solid transparent;
        border-top: 8px solid rgba(0, 0, 0, 0.8);
        left: 50%;
        bottom: -8px;
        transform: translate3d(-50%, 0, 0);
      }
    }
  }

  .rangeslider-vertical {
    margin: 20px auto;
    height: 150px;
    max-width: 10px;
    background-color: transparent;

    .rangeslider__fill,
    .rangeslider__handle {
      position: absolute;
    }

    .rangeslider__fill {
      width: 100%;
      background-color: #7cb342;
      box-shadow: none;
      bottom: 0;
    }
    .rangeslider__handle {
      width: 30px;
      height: 10px;
      left: -10px;
      box-shadow: none;
    }

    .rangeslider__handle-tooltip {
      left: -100%;
      top: 50%;
      transform: translate3d(-50%, -50%, 0);

      &:after {
        border-top: 8px solid transparent;
        border-bottom: 8px solid transparent;
        border-left: 8px solid rgba(0, 0, 0, 0.8);
        left: 100%;
        top: 12px;
      }
    }
  }

  .rangeslider-reverse {
    &.rangeslider-horizontal {
      .rangeslider__fill {
        right: 0;
      }
    }

    &.rangeslider-vertical {
      .rangeslider__fill {
        top: 0;
        bottom: inherit;
      }
    }
  }

  .rangeslider__labels {
    position: relative;

    .rangeslider-vertical & {
      position: relative;
      list-style-type: none;
      margin: 0 0 0 24px;
      padding: 0;
      text-align: left;
      width: 250px;
      height: 100%;
      left: 10px;

      .rangeslider__label-item {
        position: absolute;
        transform: translate3d(0, -50%, 0);

        &::before {
          content: '';
          width: 10px;
          height: 2px;
          background: black;
          position: absolute;
          left: -14px;
          top: 50%;
          transform: translateY(-50%);
          z-index: -1;
        }
      }
    }

    .rangeslider__label-item {
      position: absolute;
      font-size: 14px;
      cursor: pointer;
      display: inline-block;
      top: 10px;
      transform: translate3d(-50%, 0, 0);
    }
  }
`

const DatItemRange = styled(DatItem)`
  border-left-color: #2fa1d6;
`

type Props = {
  value: number
  label: React.ReactNode
  min: number
  max: number
  step?: number
  disabled?: boolean
  onChange?: (value: number) => void
  onChangeComplete?: (value: number) => void
  onChangeStart?: (value: number) => void
}

export const DatRange = (props: Props) => (
  <DatItemRange>
    <DatLabelText>{props.label}</DatLabelText>

    <SliderWrapper>
      <Slider
        min={props.min}
        max={props.max}
        value={props.value}
        onChange={value => props.onChange && props.onChange(value as number)}
        tooltip={false}
        step={props.step}
        onChangeComplete={props.onChangeComplete}
        onChangeStart={props.onChangeStart}
      />
    </SliderWrapper>
    {/* <DatInput
      style={{ width: '60%' }}
      type="number"
      inputMode="numeric"
      value={props.value}
      onChange={event => typeof props.onChange === 'function' && props.onChange(Number(event.target.value))}
      disabled={props.disabled}
    /> */}
  </DatItemRange>
)
