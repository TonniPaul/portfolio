import Image from 'next/image';
import SvgIcon from './svg-icon';
import Show from './show';
import Modal from './modal';

interface Props {
  firstName: string;
  lastName: string;
  role: string;
  company: string;
  comment: string[];
  img?: string;
  className?: string;
}

const TestimonialAuthor = ({
  firstName,
  lastName,
  role,
  company,
  img,
  className,
}: Omit<Props, 'comment'>) => {
  const fullName = `${firstName} ${lastName}`;

  const initials = `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase();

  return (
    <div className={className ?? 'flex items-center gap-4'}>
      <div className="relative flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-full bg-primary/10 text-xl font-semibold text-primary">
        <Show when={!!img} fallback={initials}>
          <Image
            src={img as string}
            alt={fullName}
            fill
            sizes="64px"
            className="object-cover"
          />
        </Show>
      </div>

      <div className="min-w-0">
        <h3 className=" md:text-lg font-semibold">{fullName}</h3>
        <p className="text-sm text-foreground/60">
          {role}, {company}.
        </p>
      </div>
    </div>
  );
};

const TestimonialCard = ({
  firstName,
  lastName,
  role,
  company,
  comment,
  img,
}: Props) => {
  return (
    <article className="section-card flex h-full flex-col">
      <SvgIcon
        name="quote-left"
        className="mb-4 h-10 w-10 text-primary"
        aria-hidden
      />

      <p className="flex-1 line-clamp-5 min-h-[5lh]">{comment.join(' ')}</p>

      <Modal
        trigger={
          <button className="ml-auto mt-3 w-fit italic underline text-primary hover:text-primary/80">
            Read full
          </button>
        }
      >
        <div className="app-padding relative isolate">
          <div className="sticky top-0 left-0 z-1 bg-background py-3">
            <TestimonialAuthor
              firstName={firstName}
              lastName={lastName}
              role={role}
              company={company}
              img={img}
            />
          </div>

          <div className="app-divider" />

          <div className="flex gap-3 mt-5">
            <SvgIcon
              name="quote-left"
              className="size-4 md:size-12 text-primary"
              aria-hidden
            />
            <div className="space-y-5 flex-1 mt-4 md:mt-8">
              {comment.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </Modal>

      <div className="app-divider" />

      <TestimonialAuthor
        firstName={firstName}
        lastName={lastName}
        role={role}
        company={company}
        img={img}
      />
    </article>
  );
};

export default TestimonialCard;
