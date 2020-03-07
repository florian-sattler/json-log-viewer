# json-log-viewer

Corrected and extended code for forks:
- https://github.com/gistia/json-log-viewer
- https://github.com/kiciro/json-log-viewer

Changes:
- custom column in main panel
- reload file
- autoreload when the file changes
- search in all log fields
- displaying help after pressing F1

Features:
- completely operated by hotkeys
- powerful command line arguments
- sort by timestamp, level or message
- filter by any field or metadata
- search

Hotkeys:

- arrows and page up/down to move    
- enter - display details
- /   to search
- ?   to search
- n   to search again
- s   to sort
- i   to toggle ascending/descending sort
- f   to filter
- l   to filter by level
- g   to go to line
- 0   to go to first line
- $   to go to last line
- A   to first viewport line
- G   to last viewport line
- C   to center viewport line
- w   to wrap toggle
- W   to watch file toggle
- q   to quit

## Install

```bash
npm install --global json-log-viewer
```


### Configuration
The configuration is in the ``.json-log-viewer.json`` file
The program looks for configuration in the current directory. Then it tries to find the configuration in the home directory.

Sample configuration:
```json
{
  "columns": [
    { "title": "Timestamp", "key": "timestamp" },
    { "title": "Level", "key": "level", "format": "L" },
    { "title": "D", "key": "data", "format": "*" },
    { "title": "Message", "key": "message" }
  ]
}
```
Format:
- ``L``           - log level with colors
- ``*``           - space if extra data is empty, otherwise ``*`` (star)
- `` `` (space)   - space if field is empty or undefined

## Usage
```
jv application.log.2017-01-01 --sort timestamp --desc
```

Params:
- ``--sort``, ``-s``  - sort by next argument
- ``--level``, ``-l`` - log level
- ``--desc``, ``-d``  - descending sort

## Screenshots

__Details view__

![screenshot](screenshot1.png)

__Filters__

![screenshot](screenshot2.png)

__Log level selection__

![screenshot](screenshot3.png)

## License

[MIT](http://vjpr.mit-license.org)
