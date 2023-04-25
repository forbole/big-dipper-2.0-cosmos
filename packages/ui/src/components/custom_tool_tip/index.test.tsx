import CustomToolTip from '@/components/custom_tool_tip';
import MockTheme from '@/tests/mocks/MockTheme';
import dynamic from 'next/dynamic';
import numeral from 'numeral';
import { ReactNode } from 'react';
import renderer from 'react-test-renderer';
import { Cell, Pie, PieChart, Tooltip } from 'recharts';

const DynamicPieChart = dynamic(() => Promise.resolve(PieChart), { ssr: false });

// to fix error, this.wrapperNode is null node_modules/recharts/src/component/Tooltip.tsx:143
jest.mock('recharts', () => ({
  ...jest.requireActual('recharts'),
  Tooltip: () => <div id="test-tooltip" />,
}));

// ==================================
// unit tests
// ==================================
describe('component: CustomToolTip', () => {
  it('matches snapshot', () => {
    const dummyProps = [
      {
        legendKey: 'bonded',
        percentKey: 'bondedPercent',
        value: numeral(700000).format('0,0'),
        rawValue: 700000,
        percent: `${numeral((700000 * 100) / 1000000).format('0.00')}%`,
        fill: '#5451CB',
      },
      {
        legendKey: 'unbonded',
        percentKey: 'unbondedPercent',
        value: numeral(100000).format('0,0'),
        rawValue: 100000,
        percent: `${numeral((100000 * 100) / 1000000).format('0.00')}%`,
        fill: '#773CAA',
      },
      {
        legendKey: 'unbonding',
        value: numeral(200000).format('0,0'),
        rawValue: 200000,
        percent: `${numeral((200000 * 100) / 1000000).format('0.00')}%`,
        fill: 'CA4D4D',
      },
    ];

    const component = renderer.create(
      <MockTheme>
        <DynamicPieChart width={200} height={100} cy={100}>
          <Pie
            stroke="none"
            cy={90}
            data={dummyProps}
            startAngle={180}
            endAngle={0}
            outerRadius={90}
            fill="#8884d8"
            dataKey="rawValue"
            isAnimationActive={false}
          >
            {dummyProps.map((entry) => (
              <Cell key={entry.legendKey} fill={entry.fill} />
            ))}
            <Tooltip
              content={
                <CustomToolTip>
                  {(x: { legendKey: ReactNode; value: ReactNode }) => (
                    <>
                      <div>{x.legendKey}</div>
                      <div>{x.value}</div>
                    </>
                  )}
                </CustomToolTip>
              }
            />
          </Pie>
        </DynamicPieChart>
      </MockTheme>
    );
    const tree = component?.toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
});
