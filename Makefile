install:
		npm ci

publish:
		npm publish --dry-run

lint:
		npx eslint

math-games:
		node bin/math-games.js