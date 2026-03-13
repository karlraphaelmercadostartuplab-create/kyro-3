// vite.config.js
import { defineConfig } from "file:///Applications/XAMPP/xamppfiles/htdocs/kyro3/node_modules/vite/dist/node/index.js";
import laravel from "file:///Applications/XAMPP/xamppfiles/htdocs/kyro3/node_modules/laravel-vite-plugin/dist/index.js";
import react from "file:///Applications/XAMPP/xamppfiles/htdocs/kyro3/node_modules/@vitejs/plugin-react/dist/index.js";
import { resolve } from "node:path";
import { glob } from "file:///Applications/XAMPP/xamppfiles/htdocs/kyro3/node_modules/glob/dist/esm/index.js";
var __vite_injected_original_dirname = "/Applications/XAMPP/xamppfiles/htdocs/kyro3";
var workdoPackages = glob.sync("packages/workdo/*/src/Resources/js/app.tsx");
var vite_config_default = defineConfig({
  base: "./",
  plugins: [
    laravel({
      input: [
        "resources/css/app.css",
        "resources/js/app.tsx",
        ...workdoPackages
      ],
      refresh: true
    }),
    react()
  ],
  server: {
    host: "localhost",
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,POST,PUT,DELETE,OPTIONS",
      "Access-Control-Allow-Headers": "*"
    },
    watch: {
      ignored: ["**/vendor/**", "**/node_modules/**"]
    },
    fs: {
      allow: ["..", "packages"]
    }
  },
  esbuild: {
    jsx: "automatic",
    jsxImportSource: "react"
  },
  resolve: {
    alias: {
      "ziggy-js": resolve(__vite_injected_original_dirname, "vendor/tightenco/ziggy")
    }
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"],
          ui: ["@radix-ui/react-dialog", "@radix-ui/react-dropdown-menu"],
          utils: ["date-fns", "clsx"]
        }
      }
    },
    assetsDir: "assets"
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvQXBwbGljYXRpb25zL1hBTVBQL3hhbXBwZmlsZXMvaHRkb2NzL2t5cm8zXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvQXBwbGljYXRpb25zL1hBTVBQL3hhbXBwZmlsZXMvaHRkb2NzL2t5cm8zL3ZpdGUuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9BcHBsaWNhdGlvbnMvWEFNUFAveGFtcHBmaWxlcy9odGRvY3Mva3lybzMvdml0ZS5jb25maWcuanNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJztcbmltcG9ydCBsYXJhdmVsIGZyb20gJ2xhcmF2ZWwtdml0ZS1wbHVnaW4nO1xuaW1wb3J0IHJlYWN0IGZyb20gJ0B2aXRlanMvcGx1Z2luLXJlYWN0JztcbmltcG9ydCB7IHJlc29sdmUgfSBmcm9tICdub2RlOnBhdGgnO1xuaW1wb3J0IHsgZ2xvYiB9IGZyb20gJ2dsb2InO1xuXG5jb25zdCB3b3JrZG9QYWNrYWdlcyA9IGdsb2Iuc3luYygncGFja2FnZXMvd29ya2RvLyovc3JjL1Jlc291cmNlcy9qcy9hcHAudHN4Jyk7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gICAgYmFzZTogJy4vJyxcbiAgICBwbHVnaW5zOiBbXG4gICAgICAgIGxhcmF2ZWwoe1xuICAgICAgICAgICAgaW5wdXQ6XG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgJ3Jlc291cmNlcy9jc3MvYXBwLmNzcycsXG4gICAgICAgICAgICAgICAgJ3Jlc291cmNlcy9qcy9hcHAudHN4JyxcbiAgICAgICAgICAgICAgICAuLi53b3JrZG9QYWNrYWdlc1xuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIHJlZnJlc2g6IHRydWUsXG4gICAgICAgIH0pLFxuICAgICAgICByZWFjdCgpLFxuICAgIF0sXG4gICAgc2VydmVyOiB7XG4gICAgICAgIGhvc3Q6ICdsb2NhbGhvc3QnLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAnQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luJzogJyonLFxuICAgICAgICAgICAgJ0FjY2Vzcy1Db250cm9sLUFsbG93LU1ldGhvZHMnOiAnR0VULFBPU1QsUFVULERFTEVURSxPUFRJT05TJyxcbiAgICAgICAgICAgICdBY2Nlc3MtQ29udHJvbC1BbGxvdy1IZWFkZXJzJzogJyonLFxuICAgICAgICB9LFxuICAgICAgICB3YXRjaDoge1xuICAgICAgICAgICAgaWdub3JlZDogWycqKi92ZW5kb3IvKionLCAnKiovbm9kZV9tb2R1bGVzLyoqJ11cbiAgICAgICAgfSxcbiAgICAgICAgZnM6IHtcbiAgICAgICAgICAgIGFsbG93OiBbJy4uJywgJ3BhY2thZ2VzJ11cbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBlc2J1aWxkOiB7XG4gICAgICAgIGpzeDogJ2F1dG9tYXRpYycsXG4gICAgICAgIGpzeEltcG9ydFNvdXJjZTogJ3JlYWN0JyxcbiAgICB9LFxuICAgIHJlc29sdmU6IHtcbiAgICAgICAgYWxpYXM6IHtcbiAgICAgICAgICAgICd6aWdneS1qcyc6IHJlc29sdmUoX19kaXJuYW1lLCAndmVuZG9yL3RpZ2h0ZW5jby96aWdneScpLFxuICAgICAgICB9LFxuICAgIH0sXG4gICAgYnVpbGQ6IHtcbiAgICAgICAgcm9sbHVwT3B0aW9uczoge1xuICAgICAgICAgICAgb3V0cHV0OiB7XG4gICAgICAgICAgICAgICAgbWFudWFsQ2h1bmtzOiB7XG4gICAgICAgICAgICAgICAgICAgIHZlbmRvcjogWydyZWFjdCcsICdyZWFjdC1kb20nXSxcbiAgICAgICAgICAgICAgICAgICAgdWk6IFsnQHJhZGl4LXVpL3JlYWN0LWRpYWxvZycsICdAcmFkaXgtdWkvcmVhY3QtZHJvcGRvd24tbWVudSddLFxuICAgICAgICAgICAgICAgICAgICB1dGlsczogWydkYXRlLWZucycsICdjbHN4J11cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBhc3NldHNEaXI6ICdhc3NldHMnLFxuICAgIH1cbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFtVCxTQUFTLG9CQUFvQjtBQUNoVixPQUFPLGFBQWE7QUFDcEIsT0FBTyxXQUFXO0FBQ2xCLFNBQVMsZUFBZTtBQUN4QixTQUFTLFlBQVk7QUFKckIsSUFBTSxtQ0FBbUM7QUFNekMsSUFBTSxpQkFBaUIsS0FBSyxLQUFLLDRDQUE0QztBQUU3RSxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUN4QixNQUFNO0FBQUEsRUFDTixTQUFTO0FBQUEsSUFDTCxRQUFRO0FBQUEsTUFDSixPQUNBO0FBQUEsUUFDSTtBQUFBLFFBQ0E7QUFBQSxRQUNBLEdBQUc7QUFBQSxNQUNQO0FBQUEsTUFDQSxTQUFTO0FBQUEsSUFDYixDQUFDO0FBQUEsSUFDRCxNQUFNO0FBQUEsRUFDVjtBQUFBLEVBQ0EsUUFBUTtBQUFBLElBQ0osTUFBTTtBQUFBLElBQ04sU0FBUztBQUFBLE1BQ0wsK0JBQStCO0FBQUEsTUFDL0IsZ0NBQWdDO0FBQUEsTUFDaEMsZ0NBQWdDO0FBQUEsSUFDcEM7QUFBQSxJQUNBLE9BQU87QUFBQSxNQUNILFNBQVMsQ0FBQyxnQkFBZ0Isb0JBQW9CO0FBQUEsSUFDbEQ7QUFBQSxJQUNBLElBQUk7QUFBQSxNQUNBLE9BQU8sQ0FBQyxNQUFNLFVBQVU7QUFBQSxJQUM1QjtBQUFBLEVBQ0o7QUFBQSxFQUVBLFNBQVM7QUFBQSxJQUNMLEtBQUs7QUFBQSxJQUNMLGlCQUFpQjtBQUFBLEVBQ3JCO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDTCxPQUFPO0FBQUEsTUFDSCxZQUFZLFFBQVEsa0NBQVcsd0JBQXdCO0FBQUEsSUFDM0Q7QUFBQSxFQUNKO0FBQUEsRUFDQSxPQUFPO0FBQUEsSUFDSCxlQUFlO0FBQUEsTUFDWCxRQUFRO0FBQUEsUUFDSixjQUFjO0FBQUEsVUFDVixRQUFRLENBQUMsU0FBUyxXQUFXO0FBQUEsVUFDN0IsSUFBSSxDQUFDLDBCQUEwQiwrQkFBK0I7QUFBQSxVQUM5RCxPQUFPLENBQUMsWUFBWSxNQUFNO0FBQUEsUUFDOUI7QUFBQSxNQUNKO0FBQUEsSUFDSjtBQUFBLElBQ0EsV0FBVztBQUFBLEVBQ2Y7QUFDSixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
