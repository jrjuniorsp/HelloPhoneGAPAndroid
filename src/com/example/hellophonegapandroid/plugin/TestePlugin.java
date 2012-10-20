package com.example.hellophonegapandroid.plugin;

import org.apache.cordova.api.PluginResult;
import org.json.JSONArray;
import org.json.JSONException;

import com.phonegap.api.Plugin;

public class TestePlugin extends Plugin {

	@Override
	public PluginResult execute(String action, JSONArray args, String callbackID) {
		try {
            if (action.equals("teste")) {
                String echo = args.getString(0); 
                if (echo != null && echo.length() > 0) { 
                    return new PluginResult(PluginResult.Status.OK, echo.toUpperCase());
                } else {
                    return new PluginResult(PluginResult.Status.ERROR);
                }
            } else {
                return new PluginResult(PluginResult.Status.INVALID_ACTION);
            }
        } catch (JSONException e) {
            return new PluginResult(PluginResult.Status.JSON_EXCEPTION);
        }
	}

}
