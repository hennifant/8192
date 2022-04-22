import styled from 'styled-components';

const zeroColor = '#bbada0';
const colors = [
  '#776e65',
  '#776e65',
  '#f9f6f2',
  '#f9f6f2',
  '#f9f6f2',
  '#f9f6f2',
  '#f9f6f2',
  '#f9f6f2',
  '#f9f6f2',
  '#f9f6f2',
  '#f9f6f2',
  '#f9f6f2',
];

const bgColor = [
  '#eee4da',
  '#ede0c8',
  '#f2b179',
  '#f59563',
  '#f67c5f',
  '#f65e3b',
  '#edcf72',
  '#edcc61',
  '#edc850',
  '#edc53f',
  '#edc22e',
  '#3c3a32',
];
const styles = [
  {
    value: 2,
    bgColor: bgColor[0 % bgColor.length],
    color: colors[0 % colors.length],
    fontSize: '2rem',
  },
  {
    value: 4,
    bgColor: bgColor[1 % bgColor.length],
    color: colors[1 % colors.length],
    fontSize: '2rem',
  },
  {
    value: 8,
    bgColor: bgColor[2 % bgColor.length],
    color: colors[2 % colors.length],
    fontSize: '2rem',
  },
  {
    value: 16,
    bgColor: bgColor[3 % bgColor.length],
    color: colors[3 % colors.length],
    fontSize: '1.9rem',
  },
  {
    value: 32,
    bgColor: bgColor[4 % bgColor.length],
    color: colors[4 % colors.length],
    fontSize: '1.9rem',
  },
  {
    value: 64,
    bgColor: bgColor[5 % bgColor.length],
    color: colors[5 % colors.length],
    fontSize: '1.9rem',
  },
  {
    value: 128,
    bgColor: bgColor[6 % bgColor.length],
    color: colors[6 % colors.length],
    fontSize: '1.7rem',
  },
  {
    value: 256,
    bgColor: bgColor[7 % bgColor.length],
    color: colors[7 % colors.length],
    fontSize: '1.7rem',
  },
  {
    value: 512,
    bgColor: bgColor[8 % bgColor.length],
    color: colors[8 % colors.length],
    fontSize: '1.7rem',
  },
  {
    value: 1024,
    bgColor: bgColor[9 % bgColor.length],
    color: colors[9 % colors.length],
    fontSize: '1.5rem',
  },
  {
    value: 2048,
    bgColor: bgColor[10 % bgColor.length],
    color: colors[10 % colors.length],
    fontSize: '1.5rem',
  },
  {
    value: 4096,
    bgColor: bgColor[11 % bgColor.length],
    color: colors[11 % colors.length],
    fontSize: '1.5rem',
  },
  {
    value: 8192,
    bgColor: bgColor[12 % bgColor.length],
    color: colors[12 % colors.length],
    fontSize: '1.5rem',
  },
];

const Tile = ({ value, id }) => {
  const getStyle = value => {
    let ind;
    if (value === 0) {
      let style = {
        color: zeroColor,
        backgroundColor: zeroColor,
        fontSize: '2rem',
      };
      return style;
    } else {
      ind = Math.floor(Math.log2(value)) % styles.length;
    }
    let style = {
      color: styles[ind].color,
      backgroundColor: styles[ind].bgColor,
      fontSize: styles[ind].fontSize,
    };
    return style;
  };
  const classname = `Tile Tile-position-${Math.floor(id / 4) + 1}-${
    (id % 4) + 1
  }`;
  return (
    <TileContainer className={classname} id={id} style={getStyle(value)}>
      {value ? value : null}
    </TileContainer>
  );
};

const TileContainer = styled.div`
  height: 100%;
  width: 100%;
  border-radius: 0.25rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: var(--font);
  line-height: 0;
  color: #ffd5e5;
  font-weight: 600;
  -webkit-touch-callout: none;
  -ms-touch-callout: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -ms-touch-action: none;
  touch-action: none;
`;
export default Tile;
