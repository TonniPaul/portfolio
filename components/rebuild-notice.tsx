import { Button } from './button';
import { DialogTitle } from '@radix-ui/react-dialog';

const RebuildNotice = () => {
  return (
    <div className="space-y-4 text-center bg-background max-w-150 mx-auto">
      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border"></div>

      <div>
        <DialogTitle className="text-2xl font-bold">
          Portfolio Rebuild in Progress
        </DialogTitle>

        <p className="mt-2 text-muted-foreground">
          I'm crafting a new portfolio experience from the ground up—one that
          better showcases my work, capabilities, and the way I solve problems.
        </p>

        <p>
          In the meantime, you can visit the previous version to learn more
          about me and explore my work.
        </p>
      </div>

      <a
        href="https://legacy.tonnipaul.com"
        target="_blank"
        rel="noopener noreferrer"
        className="w-max block mx-auto"
      >
        <Button>View Previous Portfolio</Button>
      </a>
    </div>
  );
};

export default RebuildNotice;
