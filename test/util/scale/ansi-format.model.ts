abstract class AnsiEscapeSequences {

	/* Foreground Colors */
	public static readonly FG_BLACK = '\x1B[30m';
	public static readonly FG_RED = '\x1B[31m';
	public static readonly FG_GREEN = '\x1B[32m';
	public static readonly FG_YELLOW = '\x1B[33m';
	public static readonly FG_BLUE = '\x1B[34m';
	public static readonly FG_MAGENTA = '\x1B[35m';
	public static readonly FG_CYAN = '\x1B[36m';
	public static readonly FG_WHITE = '\x1B[37m';

	/* Resets */
	public static readonly FG_OFF = '\x1B[39m';
}

export abstract class AnsiFormat {

	public static fgBlack(text: string): string {
		const { FG_BLACK, FG_OFF } = AnsiEscapeSequences;
		return `${ FG_BLACK }${ text }${ FG_OFF }`;
	}

	public static fgRed(text: string): string {
		const { FG_RED, FG_OFF } = AnsiEscapeSequences;
		return `${ FG_RED }${ text }${ FG_OFF }`;
	}

	public static fgGreen(text: string): string {
		const { FG_GREEN, FG_OFF } = AnsiEscapeSequences;
		return `${ FG_GREEN }${ text }${ FG_OFF }`;
	}

	public static fgYellow(text: string): string {
		const { FG_YELLOW, FG_OFF } = AnsiEscapeSequences;
		return `${ FG_YELLOW }${ text }${ FG_OFF }`;
	}

	public static fgBlue(text: string): string {
		const { FG_BLUE, FG_OFF } = AnsiEscapeSequences;
		return `${ FG_BLUE }${ text }${ FG_OFF }`;
	}

	public static fgMagenta(text: string): string {
		const { FG_MAGENTA, FG_OFF } = AnsiEscapeSequences;
		return `${ FG_MAGENTA }${ text }${ FG_OFF }`;
	}

	public static fgCyan(text: string): string {
		const { FG_CYAN, FG_OFF } = AnsiEscapeSequences;
		return `${ FG_CYAN }${ text }${ FG_OFF }`;
	}

	public static fgWhite(text: string): string {
		const { FG_WHITE, FG_OFF } = AnsiEscapeSequences;
		return `${ FG_WHITE }${ text }${ FG_OFF }`;
	}
}
