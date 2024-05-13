import { HeaderHeightPx } from "../constants";

/**
 * This component makes sure that the scroll target is offset by the header height.
 */
function AutoScrollElementWithHeaderOffset({ id }: { id: string }) {
  return (
    <div className="relative block h-0 w-0 bg-transparent">
      <div
        id={id}
        className="absolute"
        style={{
          top: -HeaderHeightPx / 2,
        }}
      />
    </div>
  );
}

export default AutoScrollElementWithHeaderOffset;
