export function clsx(...args: (string | undefined | false | null)[]) {
  return args.filter(Boolean).join(' ');
}
