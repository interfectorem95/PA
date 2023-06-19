var newBuild = {

    "/pa/units/addon/NextGen_bot_factory/NextGen_bot_factory.json": ["factory", 0, { row: 2, column: 3 }]

}
if (Build && Build.HotkeyModel && Build.HotkeyModel.SpecIdToGridMap) {
    _.extend(Build.HotkeyModel.SpecIdToGridMap, newBuild);
}
