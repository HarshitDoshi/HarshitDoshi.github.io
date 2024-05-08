type AlertLinkProps = {
  children: React.ReactNode | string;
  destination: string;
}

export const AlertLink = (props: AlertLinkProps): JSX.Element => {

  const { children, destination } = props;

  const alertLinkContent = children ? children : `${destination}`;

  return (
    <>
      <a href={destination} className="mx-1 font-bold underline">{alertLinkContent}</a>
    </>
  );
}