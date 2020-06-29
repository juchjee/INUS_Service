package egovframework.waf.taglib.html;

import java.util.List;
import java.util.Map;

import javax.servlet.jsp.JspException;
import javax.servlet.jsp.JspWriter;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import egovframework.cmmn.util.CommonUtil;
import egovframework.cmmn.MethodKey;
import egovframework.waf.taglib.DefaultTagSupport;

/**
 * 선택박스
 * @author vary
 *
 */
public class SelectListTag extends DefaultTagSupport {
	
	/**
     * 
     */
    private static final long serialVersionUID = 5827327941631548270L;
    private String name;
    private String id;
	private String script;
	private String optionValues;
	private String optionNames;
	private String selectedValue;
	private String defaultValue;
    @SuppressWarnings("rawtypes")
	private List   list;
    private String listValue;
    private String listName;
	
	protected final Logger logger = LoggerFactory.getLogger(this.getClass());
	
	public int doStartTag() throws JspException {
		return (SKIP_BODY);
	}


	@SuppressWarnings("rawtypes")
	public int doEndTag() throws JspException {
		try {
		    selectedValue = getParsedValue(selectedValue, name);
		    JspWriter out = super.pageContext.getOut();
            String[] values = null;
            String[] names = null;
            if (list != null) {

                    
                String[] tValues = null;
                String[] tNames = null;
                if (optionValues != null) {
                    tValues = (optionValues != null) ? CommonUtil.toStringArray(optionValues, DELIMITER) : null;
                    tNames = (optionNames != null) ? CommonUtil.toStringArray(optionNames, DELIMITER) : tValues;
                }
                int fSize = tValues != null ? tValues.length : 0;
                int size = list.size() + fSize;
                values = new String[size];
                names = new String[size];
                if (fSize > 0) {
                    for (int i = 0; i < fSize; i++) {
                        values[i] = tValues[i];
                        names[i] = tNames[i];
                    }
                }

                if (listValue != null && listName != null) {
                    Object data = null;
                    Object valueObj = null;
                    Object nameObj = null;
                    for (int i = 0; i < list.size(); i++) {
                        data = (Object)list.get(i);
                    	if(data.getClass().getName().indexOf("Map")>=0){
                    		valueObj = ((Map)data).get(listValue);
                    		nameObj = ((Map)data).get(listName);
                    	}else{
                            valueObj = MethodKey.getMethodValue(data, listValue);
                            nameObj = MethodKey.getMethodValue(data, listName);
                    	}
                        values[i+fSize] = (valueObj != null) ? String.valueOf(valueObj) : null;
                        names[i+fSize] = (nameObj != null) ? String.valueOf(nameObj) : null;
                    }                        
                } else {
                    String[] data = null;
                    for (int i = 0; i < list.size(); i++) {
                        data = (String[])list.get(i);
                        values[i+fSize] = data[0];
                        names[i+fSize] = data[1];
                    }                        
                }

               
            } else {
                values = (optionValues != null) ? CommonUtil.toStringArray(optionValues, DELIMITER) : null;
                names = (optionNames != null) ? CommonUtil.toStringArray(optionNames, DELIMITER) : values;
            }
            SelectList showSelectList = new SelectList(name, id,  script, values, names, selectedValue, defaultValue);
    		
            
			out.println(showSelectList.buildHtml());
		} catch (Exception e) {
			logger.error("", e);
		}
		return (SKIP_BODY);
	}


    
	/**
	 * @return
	 */
	public String getName() {
		return name;
	}
	
    
	/**
	 * @return
	 */
	public String getId() {
		return id;
	}	

    /**
	 * @return
	 */
	public String getOptionNames() {
		return optionNames;
	}

	/**
	 * @return
	 */
	public String getOptionValues() {
		return optionValues;
	}

	/**
	 * @return
	 */
	public String getScript() {
		return script;
	}

	/**
	 * @param string
	 */
	public void setName(String string) {
		name = string;
	}
	
	/**
	 * @param string
	 */
	public void setId(String string) {
		id = string;
	}	

	/**
	 * @param string
	 */
	public void setOptionNames(String string) {
		optionNames = string;
	}

	/**
	 * @param string
	 */
	public void setOptionValues(String string) {
		optionValues = string;
	}

	/**
	 * @param string
	 */
	public void setScript(String string) {
		script = string;
	}

	/**
	 * @return
	 */
	public String getSelectedValue() {
		return selectedValue;
	}
	public String getDefaultValue() {
		return defaultValue;
	}
	
	/**
	 * @param string
	 */
	public void setSelectedValue(String string) {
		selectedValue = string;
	}
	
	public void setDefaultValue(String string) {
		defaultValue = string;
	}
	

    /**
     * @param list The list to set.
     */
    @SuppressWarnings("rawtypes")
	public void setList(List list) {
        this.list = list;
    }


    /**
     * @param listName The listName to set.
     */
    public void setListName(String listName) {
        this.listName = listName;
    }


    /**
     * @param listValue The listValue to set.
     */
    public void setListValue(String listValue) {
        this.listValue = listValue;
    }
    
    
}
