declare type IconProps = Omit<JSX.IntrinsicElements['img'], 'id' | 'src'> & {
    type: 'icon' | 'logo';
};
declare const ChainIcon: ({ className, type, ...props }: IconProps) => JSX.Element;
export default ChainIcon;
//# sourceMappingURL=index.d.ts.map