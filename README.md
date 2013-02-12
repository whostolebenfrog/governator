# Governator - angularjs project for centrally controlling 'tiles'

Tiles can register themselves, talk to the main controller and get displayed.

The controller should determine which tiles are displayed and where and respond to callbacks from the tiles.

This is an experiment for creating a dashboard for service monitoring. Each tile will show a metric(s) and tell the controller what it's state is (boring, interesting, erroring). The controller wil determine which tiles to show and where based on how interesting the tile is. It will respond to errors more dramatically.

That's the plan.
